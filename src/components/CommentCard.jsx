// CommentCard.jsx
import React from "react";
import styles from "./CommentCard.module.css"; // Confirm path and styling

// CommentCard.jsx
const CommentCard = ({ comment }) => {
  return (
    <div>
      <p>{comment.content}</p>
      <div>Posted by {comment.User?.username || 'Anonymous'} on {new Date(comment.createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default CommentCard
