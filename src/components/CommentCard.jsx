// CommentCard.jsx
import React from "react";
import styles from "./CommentCard.module.css"; // Confirm path and styling

const CommentCard = ({ comment }) => {
  return (
    <div className={styles.commentCard}>
      <p>{comment.text}</p>
      <div className={styles.commentInfo}>
        <span>Posted by {comment.author}</span> on{" "}
        <span>{new Date(comment.created_at).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default CommentCard;
