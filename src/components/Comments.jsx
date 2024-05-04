import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CommentCard from "./CommentCard";
import styles from "./Comments.module.css";

const Comments = ({ recipeId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    fetchComments();
  }, [recipeId]);

  const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/recipes/${recipeId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error("Failed to load comments:", error);
    }
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      alert("You must be logged in to post comments.");
      return;
    }
    try {
      const response = await axios.post(`/api/recipes/${recipeId}/comments`, { text: commentText, recipeId });
      setComments([...comments, response.data]);
      setCommentText("");
    } catch (error) {
      console.error("Failed to post comment:", error);
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
            placeholder="Type your comment here..."
            required
          />
          <button type="submit">Post Comment</button>
        </form>
      )}
    </div>
  );
};

export default Comments;