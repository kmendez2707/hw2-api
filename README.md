# HW2: RESTful API with Node.js, Express, and MongoDB

## Repository
[https://github.com/kmendez2707/hw2-api](https://github.com/kmendez2707/hw2-api)

## Description
This project implements a RESTful API for analyzing housing project data using Node.js, Express, and MongoDB. It includes full CRUD functionality and 8 analytical endpoints based on the professor’s specifications.

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- Git & GitHub

## Analytical Endpoints
- `GET /api/questions/average-units` — Average units per project
- `GET /api/questions/most-projects-ward` — Ward with most projects
- `GET /api/questions/total-affordable-units` — Total affordable units
- `GET /api/questions/under-construction-count` — Projects under construction
- `GET /api/questions/most-frequent-agency` — Most frequent agency
- `GET /api/questions/median-units` — Median units per project
- `GET /api/questions/projects-over-100` — Projects with more than 100 units
- `GET /api/questions/highest-average-ward` — Ward with highest average units per project

## CRUD Routes
- `POST /api/data` — Add new project
- `GET /api/data` — Get all projects
- `GET /api/data/:id` — Get project by ID
- `PUT /api/data/:id` — Update project
- `DELETE /api/data/:id` — Delete project

## Testing
All endpoints tested using Postman, Jest or curl. MongoDB seeded with sample data via `scripts/seed.js`.

## Author
Katherine Mendez  
GitHub: [@kmendez2707](https://github.com/kmendez2707)
UCFID: 5337290
---

_Last updated: November 9, 2025_
