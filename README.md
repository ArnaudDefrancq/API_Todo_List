📌 Todo List API

Une API RESTful développée en Node.js et TypeScript, utilisant MariaDB comme base de données.

🚀 Installation

Prérequis

Node.js (>=16)

MariaDB installé et configuré

Étapes

Cloner le projet

git clone https://github.com/ton-utilisateur/ton-repo.git
cd ton-repo

Installer les dépendances

npm install

Configurer l'environnementCrée un fichier .env à la racine avec :

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=mot_de_passe
DB_NAME=todo_db
PORT=3000

Importer la base de donnéesExécute la commande suivante dans MariaDB :

CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Lancer l'API

npm run dev

📌 Routes de l'API

Méthode

Route

Description

POST

/todo

Créer une nouvelle tâche

GET

/todo

Récupérer toutes les tâches

GET

/todo/:id

Récupérer une tâche par ID

PUT

/todo/:id/update

Mettre à jour une tâche

DELETE

/todo/:id

Supprimer une tâche

🔥 Exemples d'utilisation

➕ Créer une tâche

curl -X POST http://localhost:3000/todo -H "Content-Type: application/json" -d '{"title": "Acheter du lait", "completed": false}'

📋 Récupérer toutes les tâches

curl -X GET http://localhost:3000/todo

📝 Mettre à jour une tâche

curl -X PUT http://localhost:3000/todo/1/update -H "Content-Type: application/json" -d '{"title": "Acheter du lait et du pain", "completed": true}'

🛠 Technologies utilisées

Node.js + Express

TypeScript

MariaDB

Dotenv pour la configuration
