# 🥔 Potato – Food Delivery App

Potato is a full-stack food delivery web application built using **React (Vite)**, **Node.js**, **Express**, and **MongoDB**.  
The platform includes both a **user-facing application** and a **dedicated admin panel** for managing food items, orders, and users.

---

## 🎥 Demo Video

▶️ [Click here to watch the demo](potato-demo.mp4)

## 🚀 Features

### 👤 User Side
- User authentication (Login / Signup with JWT)
- Browse food items by category
- Add / remove items from cart
- Place orders with address details
- Payment Gateway for placing order
- View order history 
- Real-time cart updates
- Responsive UI for all devices

### 🛠️ Admin Panel
- Secure admin dashboard
- Add new food items with image upload
- View & manage all food items
- View all user orders
- Update order status (Processing → Out for Delivery → Delivered)
- Clean and modern admin UI

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Context API (State Management)
- Axios
- CSS (Custom styling)
- React Icons
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer (Image Upload)
- REST APIs
- Stripe (Payment)

---

## 📂 Project Structure

```bash
Potato-food-delivery-app/
│
├── frontend/              # User-facing app
│   ├── components/
│   ├── pages/
│   ├── context/
│   └── assets/
│
├── admin/                 # Admin panel
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   ├── models/
│   ├── middleware/
│   ├── uploads/            # Uploaded images
│   └── server.js
│
└── README.md

```
---
## 🚀 Getting Started – Potato Food Delivery App

Follow these steps to run the project locally.

---

### 📋 Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)
- Git

---

### 📥 Clone the Repository
```bash
git clone https://github.com/archikirar30/Potato-food-delivery-app.git
cd Potato-food-delivery-app
```
### 🔐 Environment Variables Guide

This document explains all the required environment variables used in the **Potato – Food Delivery App**.

> ⚠️ Never commit actual environment values (secrets, passwords, tokens) to GitHub.

---

### 📁 Backend Environment Variables

Create a `.env` file inside the **backend** directory.

#### Required Variables

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_api_key
```

---
## ▶️ Start Backend
```bash
cd backend
npm install
npm run server
```
### Backend runs at:
```bash
http://localhost:4000
```
---
## ▶️ Start Frontend (User App)
```bash
cd frontend
npm install
npm run dev
```
### Frontend runs at:
```bash
http://localhost:5001
```
---
## ▶️ Start Admin Panel
```bash
cd admin
npm install
npm run dev
```
### Admin panel runs at:
```bash
http://localhost:5000
```
---
## 👩‍💻 About the Author

Hi, I’m **Archi Kirar**, a passionate **Full Stack Developer** with a strong interest in building scalable, user-focused web applications.

I enjoy working with **JavaScript**, **React**, **Node.js**, and **modern UI/UX** practices to create clean, efficient, and intuitive digital experiences. This project reflects my hands-on experience with full-stack development, REST APIs, authentication, and technical documentation.

I’m continuously learning and exploring new technologies to improve my skills and build real-world applications.

📌 Open to freelance and full-time opportunities.

🔗 **LinkedIn:** https://www.linkedin.com/in/archikirar/
🔗 **Email:** archikirar@gmail.com




