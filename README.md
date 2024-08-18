# Multi-level-Comment-System

## User Authentication Apis:
    
   * user registration api: localhost:4560/api/user/register  (POST)
   * user login api : localhost:4560/api/user/register    (POST)
      
## Create a new post Api:
   * localhost:4560/api/create-post

## Comments Apis:
   * Add new comment to a specific post  : localhost:4560/api/posts/:postId/comments  (POST)
   * Reply a specific comment on a post :  localhost:4560/api/posts/:postId/comments/:commentId/reply   (POST)
   * Get all the comments with replies for a specific post: localhost:4560/api/posts/:postId/comments    (GET)
   * Get replies for a specific comment with pagination :  localhost:4560/api/posts/:postId/comments/:commentId/expand (GET)