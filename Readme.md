# Chat Application

This project is a full-stack web application featuring real-time chat functionality, built with a React frontend and Node.js/Express backend.

## Project Details

- *Name*: Dhanshri Gawale  
- *University*: Indian Institute of Technology Kharagpur  
- *Department*: Chemistry  

## Prerequisites

To run this project locally, you need the following installed on your system:

- *Node.js* (v14 or higher)
- *npm* (v6 or higher)

## Getting Started

Follow these steps to set up and run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/GawaleDhanshri/WeChat-App/tree/main
cd WeChat-App
```


### 2. Install Dependencies

#### Client

Navigate to the client folder and install the necessary dependencies:

```bash
cd client
npm install
```


#### Server

Navigate to the server folder and install the necessary dependencies:

```bash
cd ../server
npm install
```


### 3. Running the Project

#### Client

After installing the dependencies, start the client side:

```bash
cd client
npm run dev
```


The client will run on *http://localhost:5173*.

#### Server

In a new terminal, navigate to the server directory and start the server:

```bash
cd server
npm start
```


The server will run on *http://localhost:3000*.

### 4. Testing the Application

To fully experience the chat features, you will need to create *two or more accounts* within the app. After setting up multiple accounts, you can test the following features:

- Real-time messaging
- Group chats

## Folder Structure

```
├── client
│   ├── src
│   ├── package.json
│   └── ...
├── server
│   ├── controllers
│   ├── model
│   ├── routes
│   ├── package.json
│   └── ...
```

- *client*: Contains the frontend code (React, Vite).
- *server*: Contains the backend code (Node.js, Express).

---
