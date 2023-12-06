### Project Overview
The project is a web application built using React and Vite. It incorporates features such as user authentication with Login and Register functionalities, a section to add, display, edit, delete, like and search trainers , a Contact Us page with integrated Google Maps, a Why Us section, and a Home page.

### Project Architecture
Frontend
The frontend of the application is developed using React, a popular JavaScript library for building user interfaces. Vite, a fast development server and bundler, is used to enhance the development experience.

#### Components:

### Login and Register:
Allows users to authenticate and register for an account.

### Add Trainer:
Permits users to add new trainers to the system.

### Trainers Section:
Displays a list of trainers with the option to view details, edit, delete, like and search trainers.

### Contact Us:
Integrates Google Maps to provide location information.

### Why Us:
Provides information about the advantages of using the platform.

### Home Page:
Serves as the landing page with a brief overview of the application.

### Trainer Details Page:
Displays detailed information about a specific trainer.
If the user is the owner, they can edit or delete the trainer.

### Search:
Allows users to search for trainers by name.

### Authentication
User authentication is implemented to ensure secure access to the application's features. Only registered users can add trainers and perform actions like editing or deleting trainers.

#### Trainer Actions

### Edit Trainer:
Users can modify trainer information on the Trainer Details page, but only if they are the owner.

### Delete Trainer:
Users can delete trainers, but only if they are the owner.

### Like Trainer:
Users, if not the owner, can like a trainer. However, they are limited to liking a trainer only once.

### How to Run the Project
-Clone the repository to your local machine.
-Navigate to the project directory in the terminal.
-Install dependencies using the package manager of your choice (npm or yarn).
-Run the application using the development server command.(npm run dev)
-Start server with server command (node server.js)