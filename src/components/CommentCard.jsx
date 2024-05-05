import styles from "./CommentCard.module.css"; 
import Styles from './Styles.module.css'

const CommentCard = ({ comment }) => {
  return (
    <div className={styles.card}>
      <p>{comment.content}</p>
      <div className={styles.comentInfo} >Posted by {comment.User?.username || 'Anonymous'} on {new Date(comment.createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default CommentCard
