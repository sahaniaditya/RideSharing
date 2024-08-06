# RideSharing Platform

## Introduction
This project is a comprehensive ride-sharing platform that caters to Travelers, their Companions, and Administrators. It focuses on providing seamless ride-sharing experiences with top-notch security and scalability to meet growing urban transportation demands.

## Demonstration Video
- Video : https://drive.google.com/drive/my-drive
- Report : https://drive.google.com/drive/my-drive

## Tech Stack
- Backend: Node.js, Express.js
- Database: MongoDB
- Frontend: React.js
- Styling: Tailwind CSS

## Features

### For Travelers
- Share ride details (Trip-ID, Driver Name, Driver Phone Number, cab details) via WhatsApp or SMS
- Review audit trail of shared rides

### For Traveler Companions
- Track traveler's real-time ride location
- Receive notifications (trip completion, geofence triggers)
- Share feedback on travel experience

### For Admins
- Review all shared rides
- Gain insights through aggregated user feedback

## System Architecture

### Microservices
1. Geofencing Microservice
2. Authorization Microservice
3. Ride Management Microservice
4. Notification Microservice
5. Feedback & Analytics Microservice

### External APIs
- Twilio API for SMS and WhatsApp notifications

## Security Measures
- Password hashing using bcryptjs
- Input validation with express-validator
- JWT for session management and authorization
- Secure notification delivery
- Time-limited link validity

## Key Functionalities
- Real-time tracking using WebSocket
- Geofence notifications
- Trip completion notifications
- Feedback submission and analysis
- Admin dashboard for ride and feedback overview

## Contact
Aditya Sahani - B22CS003
IIT Jodhpur
