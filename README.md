# Movie Recommendation Server

A backend server for a Movie Recommendation System, built with Express.js, Node.js, and TypeScript. It uses MySQL as its database.

## Prerequisites

Before you begin, ensure you have the following installed:
* **Node.js:** A recent LTS version (e.g., v18 or v20+) is recommended. [Install Node.js](https://nodejs.org/)
* **npm:** (Comes with Node.js)
* **MySQL:** A running MySQL server instance. [Install MySQL](https://dev.mysql.com/downloads/mysql/)

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/briangor/movie-recommendation-server.git](https://github.com/briangor/movie-recommendation-server.git)
    cd movie-recommendation-server
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Database Configuration:**
    * This project uses environment variables loaded via `dotenv` for database configuration.
    * Create a file named `.env` in the root directory of the project.
    * Add the following variables to the `.env` file, replacing the placeholder values with your actual MySQL database credentials:
        ```dotenv
        HOST=your_database_host
        USER=your_database_user
        PASSWORD=your_database_password
        DATABASE=your_database_name
        # PORT=your_desired_port (Optional, add if needed by the server)
        ```
    * Ensure you have created the specified database (`DATABASE`) and the necessary tables. **Note: The SQL queries for interacting with the database tables are currently incomplete in the codebase.** *(Maintainer: Please provide the SQL schema for the `movies` and `genres` tables).*

## Running the Server

* **Development Mode (with TypeScript compilation and automatic restarts):**
    ```bash
    npm run dev
    ```

* **Production Mode:**
    1. Build the JavaScript files from TypeScript:
        ```bash
        npm run build
        ```

    2. Start the server:
        ```bash
        npm start
        ```

The server should start running. *(Maintainer: Please specify the default port number if it's not set via the `PORT` environment variable or provide information on where to find it).*

## API Endpoints

The server provides the following API endpoints:

* **Movies:**
    * `GET /movies`: Retrieves a list of all movies.
    * `GET /movies/:id`: Retrieves a single movie by its ID.
    * `POST /movies`: Adds a new movie (requires `title`, `genre`, `releaseDate` in the request body).
    * `PUT /movies/:id`: Updates an existing movie by ID (requires `title`, `genre`, `releaseDate` in the body).
    * `DELETE /movies/:id`: Deletes a movie by ID.
* **Genres:** (Note: Genre routes are defined in `src/routes/genre.routes.ts` but the implementation in `src/utils/database.js` is currently incomplete)
    * `GET /genres`: Retrieves a list of all genres.
    * `GET /genres/:id`: Retrieves a single genre by its ID.
    * `POST /genres`: Adds a new genre.
    * `PUT /genres/:id`: Updates an existing genre by ID.
    * `DELETE /genres/:id`: Deletes a genre by ID.

    **Important Note:** The underlying database logic (SQL queries) for many of these operations is currently incomplete.

## Contributing

Please see the `CONTRIBUTING.md` file for details on how to contribute to this project. This project welcomes contributions, especially during Hacktoberfest!
