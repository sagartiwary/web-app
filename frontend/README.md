# Awesome Screen and Video Recording App

## Features

1. **User Authentication**: Sign up and Login functionality for multiple users, ensuring secure access to the app.
2. **Screen and Video Recording**: Easily create and record screen and video content right from within the app.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Fast and minimal web application framework for Node.js.
- **MongoDB Atlas**: Cloud-based database service for storing and managing application data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js applications.
- **JSON Web Token (JWT)**: Securely transmit information between parties as a JSON object.
- **Bcrypt**: A library for securely hashing passwords.

## Getting Started

1. **Frontend Setup**:

   - Navigate to the `frontend` directory.
   - Run `npm install` to install dependencies.
   - Run `npm run dev` to start the frontend development server.

2. **Backend Setup**:
   - Navigate to the `backend` directory.
   - Run `npm install` to install dependencies.
   - Run `npm run server` to start the backend server.

## API Endpoints

- `POST /user/register`: Register a new user with required name, email, and password (password must be 8 or more characters).
- `POST /user/login`: Log in as an existing user.
