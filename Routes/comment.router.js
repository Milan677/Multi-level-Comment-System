const express=require("express");
const commentRouter=express.Router();
const{createComment, replyToComment, getComment, getCommentWithPaggination}=require("../Controller/comment.controller")

//.....create a comment on specific post.......
commentRouter.post("/:postId/comments",createComment);
//.................................................

//.....reply to a specific post.......
commentRouter.post("/:postId/comments/:commentId/reply",replyToComment);
//...............................................................


//.......get comment for a post..............
commentRouter.get("/:postId/comments",getComment);
//................................................


//.......get replies for a specific comment with pagination..............
commentRouter.get("/:postId/comments/:commentId/expand",getCommentWithPaggination);
//................................................

module.exports={commentRouter}