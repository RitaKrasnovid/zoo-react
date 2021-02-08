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
    stage('Build UI') {
      steps {
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
