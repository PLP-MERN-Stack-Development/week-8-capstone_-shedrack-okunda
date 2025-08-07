# 🎫 EventEase – Event Management System with Registration & Ticketing

EventEase is a full-stack MERN application that allows organizers to create and manage events, while enabling users to register and receive tickets for events with ease. It includes user authentication, ticket booking (with free and paid options), email confirmations, and administrative management.

---

## 📌 Features

### 👤 Attendees

-   Browse available events
-   View detailed event information
-   Register for free or paid tickets
-   Receive email confirmations
-   View or download tickets with QR code

### 🧑‍💼 Organizers

-   Create, update, and delete events
-   Set multiple ticket types (e.g., Free, VIP)
-   View attendee lists and event analytics

### 🔐 Admins

-   View and manage all users and events
-   Monitor platform statistics

---

## 🧰 Tech Stack

### Frontend

-   React.js
-   Tailwind CSS
-   React Router
-   Axios

### Backend

-   Node.js
-   Express.js
-   MongoDB + Mongoose
-   JWT Authentication

### Other Tools

-   Stripe (for paid ticketing)
-   Nodemailer (email notifications)
-   QR Code generation (for tickets)
-   Jest & React Testing Library (testing)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/eventease.git
cd eventease
```

### 2. Install dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

### 3. Set environment variables

#### Create a .env file in /server with:

```bash
PORT=5000
MONGO_URI=your_mongo_connection
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
STRIPE_SECRET=your_stripe_key
```

### 4. Run the application

#### Backend

```bash
npm start
```

#### Frontend

```bash
npm run dev
Visit: http://localhost:5173
```

### 🚀 Deployment

#### Frontend: Vercel

#### Backend: Render

#### Database: MongoDB Atlas

#### CI/CD: GitHub Actions (optional)

### 🧪 Testing

#### Backend: Jest + Supertest

#### Frontend: React Testing Library

### Run tests with:

```bash
npm run test
```

# 📄 License

This project is open-source and free to use under the MIT License.

```

```
