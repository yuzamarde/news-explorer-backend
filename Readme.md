# News Explorer Backend

The News Explorer Backend is the server-side component of the News Explorer application. It provides the API endpoints and database management for the application. Below are the details and instructions for setting up and deploying the backend.

## Getting Started

To get started with the News Explorer Backend, follow these steps:

1. Clone this repository to your local machine:
   `git clone <repository-url>`

2. Navigate to the project directory:
   `cd news-explorer-backend`

3. Install the required dependencies:
   `npm install`

4. Configure the environment variables:

Create a `.env` file in the project root and set the necessary environment variables, including database connection details and any other required configurations.

5. Start the server:

You can start the server using one of the following commands:

- `npm start`: Start the server in production mode.
- `npm run dev`: Start the server using Nodemon for automatic reloading during development.

6. The server will start and be accessible at `http://localhost:3000`. You can now interact with the backend API.

## API Endpoints

The News Explorer Backend provides the following API endpoints:

- `GET /articles`: Retrieve a list of articles.
- `GET /articles/:articleId`: Retrieve a specific article by ID.
- `POST /articles`: Create a new article.
- `DELETE /articles/:articleId`: Delete a specific article by ID.
- `POST /signup`: Register a new user.
- `POST /signin`: Log in an existing user.

### Server Access

The application is deployed to a server with the following links:

- Front-end: [https://news-explorer.twilightparadox.com](https://news-explorer.twilightparadox.com)
- Back-end API: [https://api.news-explorer.twilightparadox.com](https://api.news-explorer.twilightparadox.com)

You can check the frontend GitHub repository for News Explorer at the following link: [News Explorer Frontend]

Happy coding !!!
