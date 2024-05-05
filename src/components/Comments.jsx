import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommentCard from "./CommentCard";
import { addComment } from '../controllers/commentController'; 
import styles from "./Comments.module.css";

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userId = useSelector((state) => state.user.id); 

  useEffect(() => {
    
  }, [recipeId]);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      alert("You must be logged in to post comments.");
      return;
    }
    const comment = {
      content: commentText,
      recipeId: recipeId,
      userId: userId
    };
    const newComment = await addComment(comment);
    if (newComment) {
      setComments([...comments, newComment]);
      setCommentText(""); 
    }
  };

  return (
    <div className={styles.commentsSection}>
      <h3>Comments</h3>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      {isAuthenticated && (
        <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className={styles.textarea}
            placeholder="Type your comment here..."
            required
          />
          
          <button type="submit" className={styles.button}>Post Comment</button>
          
        </form>
      )}
    </div>
  );
};

export default Comments;
