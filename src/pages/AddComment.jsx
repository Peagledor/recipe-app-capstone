import { useState } from 'react';
import axios from 'axios';

const AddComment = ({ recipeId }) => {
    const [content, setContent] = useState('');
    const [isExpanded, setIsExpanded] = useState(false); // State to track form expansion

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newComment = { content, recipeId };

        try {
            const response = await axios.post('http://localhost:4000/comments', newComment);
            console.log('Comment added:', response.data);
        } catch (error) {
            console.error('Error adding comment:', error);
        }

        setContent('');
        setIsExpanded(false); // Collapse the form
    };

    return (
        <div>
            {!isExpanded ? (
                <button onClick={() => setIsExpanded(true)}>Add Comment</button>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Comment:
                        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                    </label>

                    <button type="submit">Submit Comment</button>
                </form>
            )}
        </div>
    );
};

export default AddComment;
