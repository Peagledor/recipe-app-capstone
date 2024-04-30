import styles from './CommentCard.module.css'; 

const CommentCard = ({ comment }) => {
    return (
        <div className={styles.commentCard}>
            <p className={styles.commentContent}>{comment.content}</p>
            <div className={styles.commentMeta}>
                <span className={styles.commentDate}>Posted at: {new Date(comment.createdAt).toLocaleString()}</span>
            </div>
        </div>
    );
};

export default CommentCard;
