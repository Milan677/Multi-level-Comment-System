


# Multi-level Comment System

## Objective
The goal of this project is to design and implement a set of API endpoints for a social media platform that handles multi-level comments on posts. This system allows users to create comments, reply to existing comments, and retrieve comments with pagination. Additionally, the project includes user authentication and rate limiting to ensure secure and efficient API usage. The entire project is dockerized and can be deployed to a hosting service.

## Features
### User Registration & Login
* Users can register with a username, email, and password.
* Users must log in to access comment APIs.

### Comment System
* Users can add new comments to posts.
* Users can reply to existing comments.
* Comments can be retrieved with pagination.

### Security
* User authentication is implemented using JWT (JSON Web Tokens).
* Rate limiting is applied to prevent abuse.

## API Endpoints:

### User Authentication
  
`1.Registration`
* Endpoint :
    ```http
    POST /api/user/register
    ```
* Request body :
    ```javascript
      {
        "userName":"Prashant Kumar Mohanty",
        "email":"prashant@gmail.com",
        "password":"prashant"
      }
    ```
* Response :
    ```javascript
    {
      "msg": "A new user recently added"
    }
    ```

`2.Login`
* Endpont : 
    ```http
    POST /api/user/login
    ```
* Request body :
    ```javascript
    {
     "email":"prashant@gmail.com",
     "password":"prashant"
    }
    ```
* The above API can return a json data which contains a text `message` and a acess `token` as response.
* Response :
    ```javascript
      {
         "msg": "Login succesfull !",
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmMwNjIwYjIwNjQ0NzVkZTRjMTJjMzEiLCJpYXQiOjE3MjQwODI4MTAsImV4cCI6MTcyNDA5MDAxMH0.uISnR300htxiWn6EYdTCkYw3lOf9QLw6kaH2kCoMbng"
      }
    ```
## New post creation by user
* Endpoint :
    ```http
    POST /api/create-post
    ```
* Request body :
    ```javascript
      {
        "title":"post 3",
        "content":"This is the content of post 3"
      }
    ```
* Response :
    ```javascript
    {
       "msg": "new post created",
       "post": {
            "title": "post 3",
            "content": "This is the content of post 3",
            "userId": "66c0620b2064475de4c12c31",
            "_id": "66c3808bd1c5330fd2500c6d",
            "__v": 0
       }
    }
    ```    