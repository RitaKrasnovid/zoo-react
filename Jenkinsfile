pipeline {
  agent {
    docker {
      image 'node:6-alpine'
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
