# Me-API Playground
Frontend: https://me-api-playgroundfull.netlify.app

Backend API: https://me-api-playground-22ao.onrender.com

## Architecture
- Backend: Node.js + Express + MongoDB
- Frontend: React
- Database: MongoDB

## Setup

### Backend
1. cd backend
2. npm install
3. Create .env with:
MONGO_URI=Enter Here Mongo URI
PORT=5000

4. Seed database: npm run seed
5. Start server: npm start

### Frontend
1. cd frontend
2. npm install
3. Start: npm start

## API Endpoints
- GET /health - Liveness check
- GET /profile - Get profile
- POST /profile - Create profile
- PUT /profile/:id - Update profile
- GET /profile/search?q=... - Search profiles
- GET /projects - List all projects
- GET /projects/skill/:skill - Filter projects by skill

## Sample CURL
curl https://me-api-playground-22ao.onrender.com/health
curl https://me-api-playground-22ao.onrender.com/profile


## Resume
[My Resume](https://drive.google.com/file/d/1wkrHQPPd21_eOgFf0AP-yNADBCcSsgwr/view?usp=drivesdk)