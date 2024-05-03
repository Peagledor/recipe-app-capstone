import React from 'react';
import styles from './CommentCard.module.css';
import { deleteComment } from '../controllers/commentController';

const CommentCard = ({ comment, onCommentDeleted, userId }) => {
    const deleteCommentHandler = async () => {
        await deleteComment(comment.id, userId); 
        onCommentDeleted(comment.id); 
    };

    return (
        <div className={styles.commentCard}>
            <h4>Comments:</h4>
            <p className={styles.commentContent}>{comment.content}</p>
            <div className={styles.commentMeta}>
                <span className={styles.commentDate}>Posted at: {new Date(comment.createdAt).toLocaleString()}</span>
            </div>
            { comment.userId === userId && (
                <button onClick={deleteCommentHandler}>Delete</button>
            )}
        </div>
    );
};

export default CommentCard;