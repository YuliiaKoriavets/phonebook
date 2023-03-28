# Phonebook

This is a simple phonebook application connected to Swagger backend API. App component with Public and Private routes, AuthPage page logic.  


## Features

In order to use this application, you need to register. The application allows you to:

- View a list of contacts
- Add a new contact
- Edit an existing contact
- Delete a contact
- Search for contacts by name


## Getting Started
To get started with the project, follow these steps:

1. Clone the project

```bash
  git clone https://github.com/YuliiaKoriavets/phonebook
```

2. Install dependencies

```bash
  npm install
```

3. Start development server

```bash
  npm start
```
The application should now be accessible at http://localhost:3000.


## API Endpoints

The following private endpoints are available:

| Method | Endpoint     | Description                |
| :-------- | :------- | :------------------------- |
| GET | / contacts | Get all contacts |
| POST | / contacts | Create a new contact |
| PATCH | / contacts / :contactId | Update an existing contact|
| DELETE | / contacts / :contactId | Delete a contact by id |


## Technologies Used

The application was built using the following technologies:

- React.js
- Redux Toolkit
- Redux Persist
- Material UI

