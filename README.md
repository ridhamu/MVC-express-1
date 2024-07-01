# Book Management API

This project is a simple CRUD application for managing a list of books. The application is built using Express with TypeScript and follows the MVC (Model-View-Controller) architecture.

## Project Structure

- `src/models`: Contains the `Book` model.
- `src/controllers`: Contains the `BookController`.
- `src/routes`: Contains the route definitions.

## Endpoints

### Create a New Book

- **Endpoint:** `POST /books`
- **Request Body:**
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Fiction"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Fiction"
  }
  ```

### Retrieve All Books

- **Endpoint:** `GET /books`
- **Response:**
  ```json
  [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "publishedYear": 1925,
      "genre": "Fiction"
    }
  ]
  ```

### Retrieve a Single Book by ID

- **Endpoint:** `GET /books/:id`
- **Response:**
  ```json
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Fiction"
  }
  ```

### Update a Book by ID

- **Endpoint:** `PUT /books/:id`
- **Request Body:**
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Classic"
  }
  ```
- **Response:**
  ```json
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedYear": 1925,
    "genre": "Classic"
  }
  ```

### Delete a Book by ID

- **Endpoint:** `DELETE /books/:id`
- **Response:**
  ```json
  {
    "message": "Book deleted successfully"
  }
  ```

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile TypeScript to JavaScript:
   ```bash
   npm run build
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. The server will be running on `http://localhost:8000`.

## Testing

Use a tool like Postman or cURL to test the endpoints.