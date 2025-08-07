# 📋 Product Requirements Document – EventEase

## 1. Project Overview

**EventEase** is a full-stack event management system that allows users to browse, register, and manage tickets for events. Organizers can create and manage events, ticket types, and attendee details. Admins can moderate platform activity.

---

## 2. Target Users

-   **Attendee**: Browses events and registers for tickets.
-   **Organizer**: Creates and manages events, tracks registrations.
-   **Admin**: Moderates users, events, and system usage.

---

## 3. User Stories

### Attendee

-   As a user, I want to register for events so that I can attend.
-   As a user, I want to receive a confirmation email and ticket.

### Organizer

-   As an organizer, I want to create and publish events.
-   As an organizer, I want to manage event details and view registrations.

### Admin

-   As an admin, I want to view all users and events to ensure quality.

---

## 4. Features (MVP)

| Feature                    | Attendee | Organizer | Admin |
| -------------------------- | -------- | --------- | ----- |
| User authentication        | ✅       | ✅        | ✅    |
| View upcoming events       | ✅       | ✅        | ✅    |
| Event details page         | ✅       | ✅        | ✅    |
| Event creation/edit/delete |          | ✅        | ✅    |
| Ticket types (Free/Paid)   | ✅       | ✅        |       |
| Register for event         | ✅       |           |       |
| Email confirmation         | ✅       |           |       |
| QR Code for ticket         | ✅       |           |       |
| Dashboard with stats       |          | ✅        | ✅    |
| Admin control panel        |          |           | ✅    |

---

## 5. Technology Stack

### Frontend

-   React.js + Tailwind CSS
-   React Router
-   Axios for API requests

### Backend

-   Node.js + Express.js
-   MongoDB (Mongoose ODM)
-   JWT for authentication

### Additional

-   Stripe for payments
-   Nodemailer for email services
-   QR Code generation

---

## 6. Database Models (Simplified)

### User

-   name
-   email
-   password
-   role (attendee, organizer, admin)

### Event

-   title
-   description
-   venue
-   date
-   ticketTypes [ { name, price, quantity } ]
-   organizerId

### Ticket

-   userId
-   eventId
-   ticketType
-   paymentStatus
-   qrCode

---

## 7. Milestones

| Week | Task                                  |
| ---- | ------------------------------------- |
| 1    | Project planning, wireframes, PRD     |
| 2    | Backend setup, models, API routes     |
| 3    | Frontend pages, event display/booking |
| 4    | Testing, admin panel, email/payment   |
| 5    | Deployment, bug fixes, final polish   |

---

## 8. Success Criteria

-   User can register and receive tickets
-   Organizer can create/manage events
-   Admin has oversight of platform
-   Application is deployed and accessible online
-   Testing implemented and passes

---

## 9. Future Enhancements

-   Social login (Google, GitHub)
-   Mobile responsive UI
-   Role-based dashboards
-   Check-in scanner using QR

Create Wireframes and Mockups for Your Application
Pages (Planned for MVP):
Homepage (list of events)

Event Details Page

Registration Page

Ticket Confirmation Page

Organizer Dashboard (create/view events, see registrations)

Admin Panel (user/event management)
