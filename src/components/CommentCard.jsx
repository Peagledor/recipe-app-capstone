// CommentCard.jsx
import React from "react";
import styles from "./CommentCard.module.css"; 
import Styles from './Styles.module.css'

const CommentCard = ({ comment }) => {
  return (
    <div className={Styles.card}>
      <p>{comment.content}</p>
      <div>Posted by {comment.User?.username || 'Anonymous'} on {new Date(comment.createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default CommentCard
