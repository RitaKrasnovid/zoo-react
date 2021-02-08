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
        sh './jenkins/scripts/build.sh'
      }
    }
    stage('Test') {
      steps {
        sh './jenkins/scripts/test.sh'
      }
    }
  }
}
