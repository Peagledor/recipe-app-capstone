const RecipeCard = ({recipe}) => {
    return (
        <div>
            <h3> {recipe.title} Title </h3>
            <img src={recipe.imageUrl} alt={recipe.title} />
            <p> {recipe.description} </p>
        </div>
    );
};

export default RecipeCard;