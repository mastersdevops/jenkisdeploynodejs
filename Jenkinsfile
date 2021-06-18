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

        stage('Publish Docker Image') {
            steps {            
                sh "docker run -d --name $dockerContainer -p 8000 $registry:$BUILD_NUMBER"
            }
        }
    }
}