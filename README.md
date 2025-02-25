# 📌 Todo List API

Une API RESTful développée en **Node.js** et **TypeScript**, utilisant **MariaDB** comme base de données.

## 🚀 Installation

### Prérequis

- **Node.js** (>=16)
- **MariaDB** installé et configuré

### Étapes

1. **Cloner le projet**

   ```sh
   git clone https://github.com/ArnaudDefrancq/API_Todo_List.git
   cd API_Todo_List.git
   ```
2. **Installer les dépendances**

   ```sh
   npm install
   ```
3. **Configurer l'environnement**Crée un fichier `.env` à la racine avec :

   ```env
   # Data server
   PORT_SERVER=3000

   # Data connexion BDD
   DB_HOST=localhost
   DB_PORT=3307
   DB_USER=root
   DB_PASSWORD=""
   DB_DATABASE=todo
   ```
4. **Importer la base de données**Via le fichier BDD.sql dans le dossier BDD.
5. **Lancer l'API**

   ```sh
   npm run dev
   ```

## 📌 Routes de l'API

| Méthode   | Route                | Description                    |
| ---------- | -------------------- | ------------------------------ |
| `POST`   | `/todo`            | Créer une nouvelle tâche     |
| `GET`    | `/todo`            | Récupérer toutes les tâches |
| `GET`    | `/todo/:id`        | Récupérer une tâche par ID  |
| `PUT`    | `/todo/:id/update` | Mettre à jour une tâche      |
| `DELETE` | `/todo/:id`        | Supprimer une tâche           |

## 🛠 Technologies utilisées

- **Node.js** + **Express**
- **TypeScript**
- **MariaDB**
- **Dotenv** pour la configuration

---
