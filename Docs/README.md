# 📦 Subscription Management System

A full-stack web application that allows users to manage subscriptions, track upcoming payments, and receive automated email reminders. Built as part of a web developer internship at Vault-Tec Security.

---

## 🚀 Features

- 🔐 User Authentication (Registration + Login)
- 📋 Dashboard for Active Subscriptions
- ✍️ Add/Edit/Delete Subscriptions
- 📅 Upcoming Payment Reminders via Email
- 🔍 Search & Filter Functionality
- ⚙️ Settings Page (User Info, Notifications, Logout)
- 🧪 Fully Tested for UI & Backend Consistency

---

## 🛠️ Technologies Used

| Frontend        | Backend           | Database  | Other Tools              |
|-----------------|-------------------|-----------|---------------------------|
| HTML, CSS, JS   | Node.js + Express | MySQL     | Git, GitHub, Live Server |
| Google Fonts    | Nodemailer        | phpMyAdmin or CLI | Dotenv, Cron Jobs |

---

## 🏗️ Project Structure
/html         → HTML pages (home, login, dashboard, etc.) /css          → Custom stylesheets /js           → Client-side scripting (AJAX, validation) /backend      → Express server, API routes, DB connection /assets       → Images, icons, etc. /docs         → Screenshots, README, PDF Report


---

## ⚙️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
   cd YOUR_REPO

2. Install Backend Dependencies
  
3. - Configure Environment Variables Create a .env file in /backend:
PORT=3000
DB_HOST=localhost
DB_USER=your_username
DB_PASS=your_password
DB_NAME=subscription_db
- Create MySQL Database
CREATE DATABASE subscription_db;
- Start the Server
node server.js


- Open the App Launch any .html file in /html using Live Server.

🗂️ Database Schema
users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  reminders_enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


subscriptions
CREATE TABLE subscriptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  service_name VARCHAR(100),
  amount DECIMAL(10,2),
  billing_date DATE,
  status ENUM('Active', 'Expired') DEFAULT 'Active',
  FOREIGN KEY (user_id) REFERENCES users(id)
);



📸 Screenshots
Find all visuals in /docs/screenshots:
- Home Page
- Dashboard
- Settings Page
- Reminder Email Preview

🧪 Testing Notes
Tested using:
- Chrome DevTools (Responsive views)
- Lighthouse (Performance, A11Y)
- SQL validation and email delivery via Gmail/Nodemailer
See /docs/testing.md for full test cases.

📝 Final Report
For a PDF report of the full project, including features, challenges, and lessons learned, refer to /docs/project_report.pdf.

📨 Submission
- GitHub Repo: https://github.com/LennoxGalanje/Subscription-Management-System
- PDF Report: Attached via email
- Submission Email: vaulttecconsultancy@gmail.com

🙌 Author
Takunda Lennox Galanje
Web Developer Intern @ Vault-Tec Security
GitHub: github.com/LennoxGalanje