
# Book Management Backend API

This is a Node.js and Express.js backend API for managing a collection of books. It provides basic CRUD (Create, Read, Update, Delete) operations for book management. 

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine.
- NPM (Node Package Manager) installed on your machine.
- MongoDB database installed and running.

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/yourusername/book-management-api.git
   cd book-management-api
   ```

2. Install the project dependencies:

   ```shell
   npm install
   ```

3. Create a `.env` file in the project root and specify your MongoDB connection URL:

   ```shell
   MONGODB_URI=mongodb://localhost:27017/bookstore
   ```

4. Start the server:

   ```shell
   npm start
   ```

The API will be accessible at `http://localhost:3000`.

## API Endpoints

### Get All Books

- URL: `/books`
- Method: `GET`
- Description: Get a list of all books.

### Get a Single Book

- URL: `/books/:id`
- Method: `GET`
- Description: Get details of a specific book by ID.

### Add a New Book

- URL: `/books`
- Method: `POST`
- Description: Add a new book to the collection.

### Update a Book

- URL: `/books/:id`
- Method: `PUT`
- Description: Update the details of a book by ID.

### Delete a Book

- URL: `/books/:id`
- Method: `DELETE`
- Description: Delete a book from the collection by ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)

