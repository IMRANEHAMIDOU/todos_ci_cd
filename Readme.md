# To-Do List Application

## Description

Ce projet est une application de gestion de tâches (To-Do List) développée avec une architecture backend en **FastAPI** (Python) et un frontend en **HTML**, **JavaScript** et **Tailwind CSS**. L'application permet aux utilisateurs de créer, lire, mettre à jour et supprimer des tâches. Elle est conçue pour être simple, réactive et facile à utiliser.

Le projet suit une méthodologie **Agile** et utilise un pipeline **CI/CD** avec **GitHub Actions** pour automatiser les tests et le déploiement.

---

## Fonctionnalités

- **Ajouter une tâche** : L'utilisateur peut ajouter une nouvelle tâche à la liste.
- **Afficher les tâches** : Les tâches sont affichées dans une liste avec leur état (complétée ou non).
- **Modifier une tâche** : L'utilisateur peut modifier le texte d'une tâche existante.
- **Supprimer une tâche** : L'utilisateur peut supprimer une tâche de la liste.
- **Marquer comme complétée** : L'utilisateur peut cocher une tâche pour la marquer comme complétée.

---

## Technologies utilisées

### Backend

- **FastAPI** : Framework Python pour la création d'API.
- **PostgreSQL** : Base de données relationnelle pour stocker les tâches.
- **asyncpg** : Bibliothèque Python pour interagir avec PostgreSQL de manière asynchrone.

### Frontend

- **HTML** : Structure de l'interface utilisateur.
- **JavaScript** : Gestion des interactions utilisateur et des appels API.
- **Tailwind CSS** : Framework CSS pour le style de l'interface.

### Outils

- **Git** : Gestion des versions du code.
- **GitHub Actions** : Automatisation des tests et du déploiement.
- **Postman** : Test des routes API.

---

## Installation

### Prérequis

- **Python 3.12.3**
- **PostgreSQL** : Installé et configuré localement.

### Étapes d'installation

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/IMRANEHAMIDOU/todos_ci_cd.git
   cd todos
   ```
