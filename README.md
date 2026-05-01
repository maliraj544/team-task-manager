# 🧠 Team Task Manager (Full-Stack)

A full-stack web application that allows users to manage projects and tasks with role-based access control (Admin/Member).

---

## 🚀 Live Demo

🔗 https://team-task-manager-production-bd3f.up.railway.app

---

## 📂 GitHub Repository

🔗 https://github.com/maliraj544/team-task-manager

---

## ✨ Features

- 🔐 User Authentication (JWT based)
- 👤 Role-based Access (Admin / Member)
- 📁 Project Creation & Management
- 📝 Task Creation, Update & Tracking
- 📊 REST APIs with MongoDB
- 🌐 Deployed on Railway
- ⚛️ Basic React Frontend

---

## 🛠 Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt.js

### Frontend:
- React.js

### Deployment:
- Railway
- GitHub

---

## 📌 API Endpoints

### 🔑 Auth
- POST /api/auth/register
- POST /api/auth/login

### 📁 Projects
- POST /api/projects (Admin only)
- GET /api/projects

### 📝 Tasks
- POST /api/tasks
- GET /api/tasks
- PUT /api/tasks/:id

---

## ⚙️ Environment Variables

Create a `.env` file inside backend:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  

---

## 💻 Run Locally

### Backend:

cd backend  
npm install  
npm start  

### Frontend:

cd frontend  
npm install  
npm start  

---

## 🎥 Demo Video

(Add your demo video link here)

---

## 📌 Future Improvements

- Better UI design
- Task assignment improvements
- Dashboard analytics
- Notifications

---

## 🙌 Author

Aliraj Mansuri  
B.Tech CSE Student | Aspiring Software Developer