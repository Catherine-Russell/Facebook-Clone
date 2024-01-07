# Acebook - Facebook Clone

![Acebook Screenshot](/public/AcebookScreenshot.png)

## Table of Contents
- [Project Description](#project-description)
- [Demo](#demo)
- [Features](#features)
- [How to Run the Application](#how-to-run-the-application)
- [Contributors](#contributors)

## Project Description
Acebook was a 2-week group project that aimed to replicate some of the social media functionalities of Facebook. We inherited a legacy MERN codebase with only simple log in, sign up and post index features. We worked together to understand the existing code and used Agile practices to introduce features such as creating posts, making comments, likes and avatars.

Tech Used:
- MongoDB
- Express.js
- React.js
- Node.js
- Testing: Cypress, Jest

## Demo
![Acebook Demo](/public/AcebookDemo.gif)


## Features
- User authentication and authorization with JWT tokens.
- Users can create and view posts on the main feed.
- Users can like and comment on posts.
- Users can choose from a range of avatars for their user profile.
- Users can view other people's posts on their profile.
- Users can upload pictures and gifs to their posts to make them more interesting!

**<ins>Server</ins>**

The server, built using Node.js and Express, handles authentication, posts, comments, avatars, and user data.
- **Express**: Web application framework for handling HTTP requests.
- **JWT**: JSON Web Token for user authentication.
- **Multer**: Middleware for handling file uploads.


**<ins>Client</ins>**

The client, built using React, offers a user interface for interacting with Acebook.
- **React**: JavaScript library for building user interfaces.
- **React Router**: Library for handling navigation and routing.
- **CSS Modules**: Modular CSS styling for components.

**<ins>Testing</ins>**

The project includes testing with Cypress and Jest. As we were building on a legacy codebase, we introduced testing in order to protect the stability and reliability of the existing functionality as we made changes.
- **Cypress**: End-to-end testing framework for web applications.
- **Jest**: JavaScript testing framework for unit and integration testing.

## How to Run the Application

1. Clone the repository: `git clone https://github.com/Catherine-Russell/Facebook-Clone.git`
2. Navigate to the project directory
3. Install dependencies for both the server and client: `npm install` in the `frontend` directory and the `api` directory.
4. Set the JWT_SECRET environment variable: `export JWT_SECRET="your-secret-key"`
5. Start the server: `npm start` in the `frontend` directory.
6. Start the client: `npm start` in the `api` directory.

**In the browser**
Navigate to `http://localhost:3000` in your browser and you should see the Acebook homepage.
From here, sign up for an account, create posts, check out other people's posts and interact with other users.

## Contributors
- [Amina Ba](https://github.com/xAmiBa)
- [Rachel Roberts](https://github.com/Rachel853)
- [Daniel Kruszewski](https://github.com/DANKRUSZ)
- [Sudhansh Kumar](skrill500)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
