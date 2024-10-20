# InventeX

InventeX is a full-stack store-keeping application built with React for the frontend and Node.js for the backend. It offers features like product management (add, view, and delete) with data stored in MongoDB Atlas.

## Features

- **View Products**: After login, users can view a list of products, including their names and available count, fetched from the backend.
- **Add Products**: Users can add new products to the store, which will be stored in the MongoDB Atlas database.
- **Delete Products**: Users can delete products, and the action will be reflected in the database.


## Technologies Used

- **Node.js** with Express.js
- **Axios** for API communication
- **MongoDB Atlas** for cloud-based database
- **Nodemon** for automatic server restarts during development

## Getting Started

1. Clone the repository
3. Navigate to the backend directory and install dependencies - npm install or npm i
4. Create a .env file in the backend directory with the following content (use the sample.env file) - add the user name  and  password
    MONGODB_URL=mongodb+srv://<db_username>:<db_password>@products.gay1l.mongodb.net/?retryWrites=true&w=majority&appName=Products
5. Start the backend server - npm run start
6. For development, use Nodemon to automatically restart the server on changes - npm run dev

### Prerequisites

- Node.js (v14+)
- Yarn or npm
- MongoDB Atlas account

## Others

- If you want to full-stack application, then please Colne the React-Intern-Practical-Test
- https://github.com/priyashankapgui/React-Intern-Practical-Test.git

