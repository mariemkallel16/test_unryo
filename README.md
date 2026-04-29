# Test technique – Unryo

## Aperçu

Ce projet implémente une application fullstack composée de :
- Une API REST permettant de gérer des users (CRUD)
- Une application web client-side consommant cette API

L’objectif est de fournir une solution simple, fonctionnelle et reproductible, conformément aux contraintes du test.

---

## Fonctionnalités

- Créer un user  
- Lister les users
- Modifier un user
- Supprimer un user

---

## Technologies utilisées

### Backend
- **FastAPI**
  - Choisi pour sa simplicité, sa rapidité de développement et sa validation automatique avec Pydantic.
  - Fournit une documentation interactive (Swagger).

### Frontend
- **React (Vite)**
  - Setup rapide et léger et framework que j'ai déjà utilisé.
  - Application entièrement client-side comme requis.

### Base de données
- **SQLite**
  - Simple à utiliser et à implémenter.
  - Suffisant pour ce test.

### Conteneurisation
- **Docker + Docker Compose**
  - Permet de garantir la reproductibilité du projet.
  - Simplifie le déploiement.

---

## Architecture

```text
Frontend (React)
        |
        | API REST (HTTP)
        v
Backend (FastAPI)
        |
        v
Base de données (SQLite)
```

## Lancement du projet

Le projet peut être lancé de deux manières : avec Docker ou en local.

---

### Option 1 — Avec Docker

Cette option permet de lancer l’ensemble du projet dans un environnement propre et reproductible.

```bash
docker-compose up --build
```
### Accès

- Frontend : http://localhost:5173  
- Backend : http://localhost:8000  
- Documentation API : http://localhost:8000/docs  

### Option 2 — En local

#### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

## API REST

### Endpoints disponibles

```text
GET    /users/          -> lister les usagers
POST   /users/          -> créer un usager
PUT    /users/{id}      -> modifier un usager
DELETE /users/{id}      -> supprimer un usager
```

### Documentation interactive
http://localhost:8000/docs

---

## Tests

Des tests unitaires ont été implémentés côté backend avec **pytest**.

**Exécution :**

```bash
cd backend
pytest
```

**Les tests couvrent :**
- La récupération des usagers
- La création d'un usager

---

## Temps de réalisation

Afin de respecter le temps imparti, certains choix ont été faits pour simplifier l’implémentation :

- Pas d’authentification implémentée
- Pas de gestion des rôles
- Interface volontairement simple
- Utilisation de SQLite pour éviter toute configuration externe

Le développement complet (backend, frontend, Docker et documentation) a été réalisé en environ 3h.

---

## Points faibles de la solution

Cette implémentation est volontairement simplifiée et présente certaines limitations :

- Absence d'authentification
- Pas de pagination
- Interface basique
- Gestion des erreurs limitée
- SQLite non adapté à la production

---

## Améliorations futures

- Ajouter authentification (JWT)
- Utiliser PostgreSQL ou MongoDB pour plus de flexibilité
- Améliorer UI/UX
- Ajouter tests frontend
- Mettre en place CI/CD
- Ajouter monitoring et logs

---

## Failles et vulnérabilités 

**Points faibles :**
- CORS ouvert
- Pas d'authentification

**Améliorations possibles :**
- Restreindre CORS
- Ajouter authentification
- Utiliser HTTPS

---

## Déploiement

Pour une solution de production :

- Reverse proxy (NGINX)
- Docker / Kubernetes
- Base de données managée
- HTTPS
- Monitoring