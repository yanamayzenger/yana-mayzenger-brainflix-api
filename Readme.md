# BrainFlix Server

## Overview

This is the server-side application for the BrainFlix project, designed to handle video data management including listing, viewing, and uploading videos. It's built with Express.js and uses several other npm packages to enhance its functionality.

## Installation

To get started with this project, clone this repository to your local machine and install the dependencies.

git clone server side: https://github.com/yanamayzenger/yana-mayzenger-brainflix-api
client side: https://github.com/yanamayzenger/yana-mayzenger-brainlix-2
cd brainflix-server
npm install

## Usage

Start the server using the npm start script. This project uses Nodemon for hot reloading during development.

npm start

The server will start running on `http://localhost:8080`. You can change the port by setting the `PORT` environment variable in a `.env` file at the root of this project.

## Endpoints

- `GET /videos`: Returns a list of all videos.
- `GET /videos/:id`: Returns details of a specific video by ID.
- `POST /videos`: Adds a new video to the list. Requires a JSON body with `title` and `description`.

## Dependencies

- Express: For creating the server and handling routes.
- UUID: For generating unique identifiers for new videos.
- CORS: To enable Cross-Origin Resource Sharing.
- Dotenv: For loading environment variables from a `.env` file.
- Axios: Used internally for testing, not required for the server's primary functionality.
- Sass: For compiling Sass to CSS, used in conjunction with the client-side application.

## Development Dependencies

- Nodemon: For automatically restarting the server upon changes during development.

## Author

Yana Mayzenger
