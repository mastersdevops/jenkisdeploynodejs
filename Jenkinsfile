node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build image') {
        app = docker.build("dach092/nodeapp")
    }

    stage('Test image') {
        app.inside {
            echo "Test passed"
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'My DockerHub') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }

        echo "Trying to Push Docker Build to DockerHub"
    }
}