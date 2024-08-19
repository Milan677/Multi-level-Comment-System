# Multi-level-Comment-System
  The objective is to design and implement a set of API endpoints for a social media platform that handles multi-level comments on posts. This system will allow users to create comments, reply to existing comments, and retrieve comments with pagination. Additionally, user authentication and rate limiting should be implemented to ensure secure and efficient usage of the API. The project should be dockerized and deployed to a hosting service.

## User Authentication Apis:
  
  `Registration`
  * The authentication have two parts one is  `Registration` and other is `Login` . 
  * To resister the required fields are `userName` `email` and `password`.
  * You can use the following API for resistration.
    
    ```http
    POST /api/user/register
    ```
  * The request body can be 

    ```javascript
      {
        "userName":"Prashant Kumar Mohanty",
        "email":"prashant@gmail.com",
        "password":"prashant"
      }
    ```
   * The above API can return a json data as response.

    ```javascript
       {
         "msg": "A new user recently added"
       }
    ```

   `Login`
   * A user can login before trying to access the comment APIs.
   * To login the required fields are `email` and `password`.
    * You can use the following API for resistration.
    
    ```http
    POST /api/user/login
    ```
   * The request body may look like :

    ```javascript
    {
     "email":"prashant@gmail.com",
     "password":"prashant"
    }
    ```
     * The above API can return a json data which contains a text `message` and a acess `token` as response.

    ```javascript
      {
         "msg": "Login succesfull !",
         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmMwNjIwYjIwNjQ0NzVkZTRjMTJjMzEiLCJpYXQiOjE3MjQwODI4MTAsImV4cCI6MTcyNDA5MDAxMH0.uISnR300htxiWn6EYdTCkYw3lOf9QLw6kaH2kCoMbng"
      }
    ```


  
      
## Create a new post Api:
   * localhost:4560/api/create-post

## Comments Apis:
   * Add new comment to a specific post  : localhost:4560/api/posts/:postId/comments  (POST)
   * Reply a specific comment on a post :  localhost:4560/api/posts/:postId/comments/:commentId/reply   (POST)
   * Get all the comments with replies for a specific post: localhost:4560/api/posts/:postId/comments    (GET)
   * Get replies for a specific comment with pagination :  localhost:4560/api/posts/:postId/comments/:commentId/expand (GET)