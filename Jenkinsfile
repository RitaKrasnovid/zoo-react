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
        dir('./zoo') {
          echo 'The following "npm" command build'
          sh 'npm install'
          echo 'Finished'
        }
      }
    }
    stage('Test') {
      steps {
        dir('./zoo') {
          echo 'The following "npm" command tests'
          sh 'npm run test'
          echo 'Finished'
        }
      }
    }
    stage('Deliver') {
      steps {
        sh "chmod +x -R ${env.WORKSPACE}"
        sh '../jenkins/scripts/deliver-ui.sh'
      }
    }
  }
}
