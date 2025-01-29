# 📝 To-Do App (Full-Stack Next.js + Express + Prisma + PostgreSQL)

## 📌 Overview
This is a **Full-Stack To-Do Application** built using:
- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Express.js, Prisma ORM, PostgreSQL
- **Authentication:** JWT (JSON Web Tokens)
- **Database:** PostgreSQL
- **Containerization:** Docker & Docker Compose
- **State Management:** React Query (TanStack Query)
- **Deployment Ready:** Works with Docker for easy deployment

---

## 🚀 Features
✅ User Authentication (Register & Login)
✅ Add, Update, Delete, and Fetch Tasks
✅ JWT Authentication Middleware for Secure API Endpoints
✅ Uses Prisma ORM to Interact with PostgreSQL
✅ Fully Containerized with Docker & Docker Compose
✅ Next.js App Router & Server Actions for Optimized Performance
✅ CORS Configured for Frontend-Backend Communication
✅ Centralized API Calls with Axios
✅ Modern UI with Tailwind CSS
✅ Error Handling & Logging

---

## 📂 Project Structure

```
📦 todo-app-nextjs
├── 📁 backend (Express API)
│   ├── 📁 routes
│   │   ├── auth.js (User authentication)
│   │   ├── tasks.js (Task CRUD operations)
│   ├── 📁 middlewares
│   │   ├── authMiddleware.js (JWT verification)
│   ├── 📁 prisma
│   │   ├── schema.prisma (Database schema)
│   ├── .env (Backend environment variables)
│   ├── Dockerfile (Backend Docker setup)
│   ├── index.js (Main Express server)
│   ├── package.json (Backend dependencies)
│
├── 📁 frontend (Next.js Frontend)
│   ├── 📁 app
│   │   ├── 📁 tasks (Task pages)
│   │   ├── 📁 api (API calls using server actions)
│   │   ├── 📁 login (Login page)
│   │   ├── 📁 register (Register page)
│   ├── 📁 components (Reusable UI components)
│   ├── 📁 hooks (Hooks/Queries)
│   ├── 📁 styles (Tailwind CSS config)
│   ├── .env.local (Frontend environment variables)
│   ├── next.config.js (Next.js config)
│   ├── package.json (Frontend dependencies)
│
├── docker-compose.yml (Docker setup for full project)
├── .gitignore (Ignored files)
└── README.md (This file)
```

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-repo/todo-app-nextjs.git
cd todo-app-nextjs
```

### **2️⃣ Configure Environment Variables**
#### **Backend (`backend/.env`)**
```
PORT=8000
DATABASE_URL=postgresql://todo_user:password123@db:5432/todo_app
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=5h
```

#### **Frontend (`frontend/.env.local`)**
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### **3️⃣ Run the Project with Docker**
```sh
docker compose up --build
```

### **4️⃣ Open the App in Browser**
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8000/api](http://localhost:8000/api)
- Health Check: [http://localhost:8000/health](http://localhost:8000/health)

---

## 🔥 API Documentation
### **🔐 Authentication Routes**
#### **Register User**
`POST /api/auth/register`
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
#### **Login User**
`POST /api/auth/login`
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
#### **Response:**
```json
{
  "token": "jwt_token",
  "user": { "id": 1, "email": "user@example.com" }
}
```

### **📝 Task Routes (Protected by JWT)**
#### **Get All Tasks**
`GET /api/tasks`
#### **Create Task**
`POST /api/tasks`
```json
{
  "title": "New Task"
}
```
#### **Update Task**
`PUT /api/tasks/:id?title=Updated Task&status=true`
#### **Delete Task**
`DELETE /api/tasks/:id`

---

## 🐳 Docker Usage
### **Run the App**
```sh
docker compose up --build
```
### **Stop Containers**
```sh
docker compose down
```
### **Check Running Containers**
```sh
docker ps
```
### **View Logs**
```sh
docker logs backend-1
```

---

## 🔍 Troubleshooting
**Issue: Backend container exits (`docker ps -a` shows `Exited`)**
✅ Check logs:
```sh
docker logs backend-1
```
✅ Make sure `.env` is set correctly.

**Issue: Database connection error**
✅ Ensure PostgreSQL is running inside Docker:
```sh
docker compose ps
```
✅ Restart database container:
```sh
docker compose restart db
```

**Issue: Prisma Client not initialized (`prisma generate` error)**
✅ Run inside the backend container:
```sh
docker exec -it backend-1 sh
npx prisma generate
exit
```

---

## 👨‍💻 Contributing
1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature-name`)
3. **Commit changes** (`git commit -m "Added new feature"`)
4. **Push to GitHub** (`git push origin feature-name`)
5. **Create a Pull Request** 🚀

---

## 📜 License
This project is licensed under the **MIT License**.


