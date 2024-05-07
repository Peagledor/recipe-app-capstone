import styles from "./RecipeCard.module.css"; 


const CommentCard = ({ comment }) => {
  return (
    <div>
      <p>{comment.content}</p>
      <div className={styles.comentInfo} >Posted on {new Date(comment.createdAt).toLocaleDateString()}</div>
    </div>
  );
};

export default CommentCard
