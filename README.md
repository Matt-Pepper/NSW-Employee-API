# NSW Employee API

This is a web application for managing employees. The project consists of a Spring RESTful API and a React TypeScript frontend.

## Table of Contents

-   [NSW Employee API](#nsw-employee-api)
    -   [Table of Contents](#table-of-contents)
    -   [Technology Stack](#technology-stack)
        -   [Frontend](#frontend)
        -   [Backend](#backend)
    -   [API Endpoints](#api-endpoints)
        -   [Examples](#examples)
            -   [Request](#request)
            -   [Response](#response)
        -   [GET /employees](#get-employees)
        -   [GET /employees/{id}](#get-employeesid)
        -   [POST /employees](#post-employees)
        -   [PATCH /employees/{id}](#patch-employeesid)
        -   [DELETE /employees/{id}](#delete-employeesid)
    -   [Getting Started](#getting-started)
        -   [Prerequisites](#prerequisites)
        -   [Clone the Repository](#clone-the-repository)
        -   [Database Setup](#database-setup)
        -   [Backend Setup](#backend-setup)
        -   [Frontend Setup](#frontend-setup)
    -   [Deployment](#deployment)
        -   [First Steps](#first-steps)

## Technology Stack

The following technologies were used in this project:

### Frontend

-   React
-   Vite
-   Typescript
-   Node
-   npm

### Backend

-   Spring Boot
-   Java 17
-   MYSQL

## API Endpoints

| Method                        | Endpoint          | Description                        |
| ----------------------------- | ----------------- | ---------------------------------- |
| [GET](#get-employees)         | `/employees`      | Retrieve all employees             |
| [GET](#get-employeesid)       | `/employees/{id}` | Retrieve a specific employee by ID |
| [POST](#post-employees)       | `/employees`      | Create a new employee              |
| [PATCH](#patch-employeesid)   | `/employees/{id}` | Update an existing employee        |
| [DELETE](#delete-employeesid) | `/employees/{id}` | Delete an employee by ID           |

### Examples

#### Request

```json
{
    "firstName": "Bob",
    "middleNames": null,
    "lastName": "Smith",
    "email": "bob.smith@example.com",
    "phoneNumber": "0412345678",
    "address": "789 Example St, Sydney, NSW",
    "isPermanent": true,
    "isFullTime": true,
    "hoursPerWeek": 40,
    "startDate": "2022-01-01",
    "endDate": null
}
```

#### Response

```json
{
    "id": 1,
    "firstName": "Bob",
    "middleNames": null,
    "lastName": "Smith",
    "email": "bob.smith@example.com",
    "phoneNumber": "0412345678",
    "address": "789 Example St, Sydney, NSW",
    "isPermanent": true,
    "isFullTime": true,
    "hoursPerWeek": 40,
    "startDate": "2022-01-01",
    "endDate": null
}
```

### GET /employees

Retrieves a list of all employees.

-   Parameters

None

-   Response

An array of employees and a `200 OK` response code.

### GET /employees/{id}

Retrieves an employee by their ID.

-   Parameters

id - The ID of the employee to retrieve.

-   Response

A single employee and a `200 OK` response code.

### POST /employees

Creates a new employee.

-   Parameters

The request body must contain a JSON object with the following properties:

-   `firstName` (string, required) - The employee's first name.
-   `middleNames` (string, optional) - The employee's middle name(s).
-   `lastName` (string, required) - The employee's last name.
-   `email` (string, required) - The employee's email address.
-   `phoneNumber` (string, required) - The employee's phone number.
-   `address` (string, required) - The employee's address.
-   `isPermanent` (boolean, required) - Indicates whether the employee is permanent or not.
-   `isFullTime` (boolean, required) - Indicates whether the employee is full-time or not.
-   `hoursPerWeek` (number, required) - The number of hours the employee works per week.
-   `startDate` (string, optional) - The date the employee started working (in ISO-8601 format, e.g. "2022-01-01").
-   `endDate` (string, optional) - The date the employee stopped working (in ISO-8601 format, e.g. "2022-12-31").

-   Request

Requires minimum that all not optional fields are provided.

-   Response

Returns the created employee, a `201 Created` response code.

### PATCH /employees/{id}

Finds an employee by id and if it exists in the database will make requested changes.

-   Parameters

id - The ID of the employee to update.

And a valid employee request body.

-   Response

Server will return a `204 No Content` response code.

### DELETE /employees/{id}

Finds an employee by id and if it exists removes the record from the database.

-   Parameters

id - The ID of the employee to delete.

-   Response

Server will return a `204 No Content` response code.

## Getting Started

To run the project, follow the instructions below.

### Prerequisites

Make sure you have the following installed on your machine:

-   Java 17
-   Maven (This comes with Eclipse and IntelliJ)
-   Node.js
-   npm
-   MySQL
-   TypeScript

### Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Matt-Pepper/NSW-Employee-API
```

### Database Setup

Make sure you have MySQL server runing on your machine.

Open the `application.properties` file in the `server/src/main/resources/` directory and update the following properties with your database credentials:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/employees
spring.datasource.username=root
spring.datasource.password=MyPass2020
```

If you are using a different database, update the `spring.datasource.url` property accordingly.

Spring boot will create the required tables.

### Backend Setup

Go to the `./server/src/main/resources` directory and open the `.env` file and change the username and password to your MySQL credentials.

Open a terminal and navigate to the `server` directory.

Run the following command to build the project:

```bash
mvn clean install
```

Once the build is complete, run the following command to start the server:

```bash
mvn spring-boot:run
```

This will start the server on `http://localhost:8080`.

### Frontend Setup

Open a terminal and navigate to the `client` directory.

Run the following command to install dependencies:

```bash
npm install
```

Once the installation is complete, run the following command to start the frontend:

```bash
npm run dev
```

This will start the frontend on `http://localhost:5173`.

## Deployment

### First Steps

Open a terminal in the `NSW-Employee-API` directory and type the following commands:

```bash
# Change directory to the React app
cd client

# Install dependencies and build the app
npm install
npm run build
# Build files will get stored in ./server/src/main/resources/static

# Change directory to the Spring Boot app
cd ../server

# Build the Spring Boot app
mvn clean package
```
