# 📌 Todo List API  

Une API RESTful développée en **Node.js** et **TypeScript**, utilisant **MariaDB** comme base de données.

## 🚀 Installation  

### Prérequis  
- **Node.js** (>=16)  
- **MariaDB** installé et configuré  

### Étapes  
1. **Cloner le projet**  
   ```sh
   git clone https://github.com/ton-utilisateur/ton-repo.git
   cd ton-repo
   ```

2. **Installer les dépendances**  
   ```sh
   npm install
   ```

3. **Configurer l'environnement**  
   Crée un fichier `.env` à la racine avec :  
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=mot_de_passe
   DB_NAME=todo_db
   PORT=3000
   ```

4. **Importer la base de données**  
   Exécute la commande suivante dans MariaDB :  
   ```sql
   CREATE DATABASE todo_db;
   USE todo_db;

   CREATE TABLE todos (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       completed BOOLEAN DEFAULT FALSE,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. **Lancer l'API**  
   ```sh
   npm run dev
   ```

## 📌 Routes de l'API  

| Méthode | Route                 | Description               |
|---------|-----------------------|---------------------------|
| `POST`  | `/todo`               | Créer une nouvelle tâche  |
| `GET`   | `/todo`               | Récupérer toutes les tâches |
| `GET`   | `/todo/:id`           | Récupérer une tâche par ID |
| `PUT`   | `/todo/:id/update`    | Mettre à jour une tâche   |
| `DELETE`| `/todo/:id`           | Supprimer une tâche       |

## 🔥 Exemples d'utilisation  

### ➕ Créer une tâche  
```sh
curl -X POST http://localhost:3000/todo -H "Content-Type: application/json" -d '{"title": "Acheter du lait", "completed": false}'
```

### 📋 Récupérer toutes les tâches  
```sh
curl -X GET http://localhost:3000/todo
```

### 📝 Mettre à jour une tâche  
```sh
curl -X PUT http://localhost:3000/todo/1/update -H "Content-Type: application/json" -d '{"title": "Acheter du lait et du pain", "completed": true}'
```

## 🛠 Technologies utilisées  
- **Node.js** + **Express**  
- **TypeScript**  
- **MariaDB**  
- **Dotenv** pour la configuration  

---  

Ce fichier README fournit toutes les informations essentielles pour installer, configurer et utiliser l'API. Dis-moi si tu veux ajouter d'autres détails ! 🚀

