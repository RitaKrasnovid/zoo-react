pipeline {
  agent any

  tools {nodejs "node"}

  stages {
    stage('Init UI') {
      steps {
        git 'https://github.com/RitaKrasnovid/zoo-react.git'
        dir("./zoo") {
          bat 'npm install'
          bat 'npm run test'
        }
      }
    }
    stage('Build UI') {
      steps {
        git 'https://github.com/RitaKrasnovid/zoo-react.git'
        dir("./zoo") {
          bat 'npm run build'
        }
      }
    }
    stage('Init Backend') {
      steps {
        git 'https://github.com/RitaKrasnovid/zoo-react.git'
        dir("./backend") {
          bat 'npm install'
        }
      }
    }
  }
}
