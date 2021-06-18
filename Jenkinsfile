pipeline {
    environment {
        registry = "dach092/nodeapp"
        registryCredential = 'MyDockerHub'
        dockerImage = ''
        dockerContainer = 'NodeApp'
    }

    agent any

    stages {
        stage('Cloning Git') {
            steps {
                git 'https://github.com/mastersdevops/jenkisdeploynodejs.git'
            }
        }

        stage('Building Image') {
            steps {
                script {
                    dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }

        stage('Deploy Image') {
            steps {
                script {
                    docker.withRegistry('',registryCredential) {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Remove Unused Docker Image') {
            steps {
                sh "docker rmi $registry:$BUILD_NUMBER"
                sh "docker rmi $registry:latest"
            }
        }

        stage('Publish Docker Image') {
            steps {
                sh "docker stop $dockerContainer || true && docker rm $dockerContainer || true"
                sh "docker run -d --name $dockerContainer --publish -p 8000 $registry:$BUILD_NUMBER"
            }
        }
    }
}