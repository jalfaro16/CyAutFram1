pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npm run Suite1'
            }
        }

        stage('Publish Reports') {
            steps {
                // Este es un ejemplo, puedes adaptarlo si tienes otro reporte
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'mochawesome-report',
                    reportFiles: 'mochawesome.html',
                    reportName: 'Mochawesome Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/mochawesome-report/**'
        }
        success {
            echo 'Pruebas ejecutadas correctamente'
        }
        failure {
            echo 'Las pruebas fallaron'
        }
    }
}
