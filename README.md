# HW2: RESTful API with Node.js, Express, and MongoDB

## Author
Katherine Mendez  
Homework #2 — RESTful API  
Fall 2025

---

## Overview
This project implements a RESTful API using Node.js, Express, and MongoDB. It allows users to create, retrieve, and delete messages via HTTP requests. Built for Homework #2 in CS course, following lecture notes and best practices.

## Technologies
- Node.js
- Express
- MongoDB
- Mongoose
- dotenv
- nodemon

## Installation

1. Clone the repo or download the project folder.
2. Install dependencies:

   ```bash
   npm install


3. Create a `.env` file in the root directory:

   ```env
   MONGO_URI=mongodb://localhost:27017/hw2db
   PORT=3000

4. Start MongoDB:
   /usr/local/mongodb/mongodb-macos-x86_64-6.0.13/bin/mongod --dbpath ~/mongodb-data

5. Start the server:
   npm run dev

6. API Endpoints
   GET /api/messages
   Returns all saved messages.

   POST /api/messages
   Creates a new message. Example:
   {
  "name": "Katherine",
  "email": "kat@example.com",
  "message": "This is my first message!"
}
   
   DELETE /api/messages/:id
   Deletes a message by its MongoDB _id.

7. Example Usage:
   curl http://localhost:3000/api/messages
curl -X POST http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d '{"name":"Katherine","email":"kat@example.com","message":"Hello!"}'
curl -X DELETE http://localhost:3000/api/messages/<id>
