pipeline {
  agent {
    docker {
      image 'node:10.23.2-alpine3.10'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh "chmod +x -R ${env.WORKSPACE}"
        sh './jenkins/scripts/build-ui.sh'
        sh './jenkins/scripts/build-backend.sh'
      }
    }
    stage('Test') {
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }
    stage('Deliver') {
      steps {
        sh './jenkins/scripts/deliver-backend.sh'
        sh './jenkins/scripts/deliver-ui.sh'
      }
    }
  }
}
