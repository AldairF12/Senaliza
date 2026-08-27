# 💻 Señaliza

> Interactive web platform designed to support learning through structured lessons, user management and role-based administration.

---

## 📌 Overview

**Señaliza** is a full-stack web platform developed as a team project to provide an interactive learning environment.

The system provides different experiences according to the user's role, including student and administrator interfaces.

The project combines frontend development, backend services and database management into a single web application.

---

## 🎯 Objective

The platform aims to provide users with a simple and accessible environment to:

- Access learning content
- Navigate through available lessons
- Manage their profile
- Interact with learning resources

Administrators can manage students, lessons and other platform entities through a dedicated administration interface.

---

## ✨ Main Features

### 👨‍🎓 Student

- User registration and login
- Profile management
- Access to available lessons
- Navigation between learning content
- Interactive learning interface

### 🛠️ Administrator

- Administrative dashboard
- Student management
- Lesson management
- Entity management
- Create, edit and delete records
- Centralized administration interface

---

## 👨‍💻 My Contribution

This repository contains my implementation and improvements to the project.

My main contributions include:

- UI/UX design
- Frontend development
- Student interface implementation
- Administrator interface implementation
- Navigation and page structure
- Application views
- Visual design and styling
- Integration of frontend components with backend services

> This project was developed collaboratively. The contribution section describes my individual work within the team.

---

## 🏗️ Architecture

```text
┌──────────────────────┐
│        User          │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   Angular Frontend   │
└──────────┬───────────┘
           │
        REST API
           │
           ▼
┌──────────────────────┐
│    Backend API       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│       Database       │
└──────────────────────┘
