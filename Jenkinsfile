pipeline {
  agent {
    docker {
      image 'node:10.23.2-alpine3.10'
      args '-p 3000:3000'
    }
  }
  stages {
    stage('Build UI') {
      steps {
        dir("./zoo") {
          sh 'npm install'
        }
      }
    }
    stage('Build Backend') {
      steps {
        dir("./backend") {
          sh 'npm install'
        }
      }
    }
  }
}
