# NSW Employee API

This is a web application for managing employees. The project consists of a Spring RESTful API and a React TypeScript frontend.

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

## Table of Contents

-   [NSW Employee API](#nsw-employee-api)
    -   [Technology Stack](#technology-stack)
        -   [Frontend](#frontend)
        -   [Backend](#backend)
    -   [Table of Contents](#table-of-contents)
    -   [Getting Started](#getting-started)
        -   [Prerequisites](#prerequisites)
        -   [Clone the Repository](#clone-the-repository)
        -   [Database Setup](#database-setup)
        -   [Backend Setup](#backend-setup)
        -   [Frontend Setup](#frontend-setup)

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
spring.datasource.password=MyPass
```

If you are using a different database, update the `spring.datasource.url` property accordingly.

Spring boot will create the required tables.

### Backend Setup

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
