node{

    stage('git check'){
        git url:'https://github.com/gem-Amogh/node-app.git' , branch: 'main'
    }

    stage('build docker file'){
        bat 'docker build -t node-app .'
        echo 'build done'
    }

    stage('Push Docker image to Nexus') {
        docker.withRegistry("http://localhost:8082/repository/node-app/", "nexus-cred") {
            docker.image("node-app:latest").push()
        }
        echo "Successfully pushed to Nexus repository"
    }
}