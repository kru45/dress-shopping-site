pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    stages {
        stage('Clean Workspace Remnants') {
            steps {
                echo 'Wiping old temporary files...'
                cleanWs()
            }
        }

        stage('Checkout Source Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Application Dependencies') {
            steps {
                echo 'Installing packages at the absolute repository root...'
                sh 'npm install'
            }
        }

        stage('Compile Production Code') {
            steps {
                echo 'Building production assets via Vite...'
                sh 'npm run build'
            }
        }
    }
}