#Building a Full-Stack User Management System Similar to Instagram




## Features
- **User Registration**: Allows new users to sign up with their credentials (username, email, password).
- **User Login**: Allows users to authenticate
- ""user loggedin**: it helps us to get the user data with token and bookies for subsequent requests
- **Validation**: Validates user input for registration and login.
- **Error Handling**: Includes proper error handling for invalid inputs, duplicate entries, and server errors.

## Technologies Used
- **Express.js**: Web framework for Node.js for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: MongoDB ODM (Object Document Mapper) for interacting with the database.
- **dotenv**: For managing environment variables securely.
- **cors**:it is used to allow  web application to interacrt with resourse from oth
- **bcrypt**: is used to encrypt the passsword making sure the privacy
- **jwt**: is used for generating tokens and store them in cookies for subsequent user requests

## Installation

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** installed locally or a **MongoDB Atlas** account if using a cloud database.
  
**Usage**: Instructions on how to use your project after installation, such there care ccouple of apis that you can leverage **registartion**:-post/api/registeruser and **loggin user**:- post/api/loggin. User must be provide three field and those three fields are name,email,password and this is for registration and for login you need to provide two field and they are email and password
 
 **request body sample**
 {
 "name":"john"
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123"
  "confirmpassword":"password123"
  "bio":"happy"
}

### Steps to Set Up

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/santhoshkumar0202/user-management-backend.git
