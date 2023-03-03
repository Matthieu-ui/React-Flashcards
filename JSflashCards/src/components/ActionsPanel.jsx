import { useState } from 
"react";


const ActionsPanel = () => {
  
  const [hearts, setHearts] = useState(0);
  
      const handleHeartClick = () => {
        setHearts(hearts + 1);
    }

    const [numBookmarks, setNumBookmarks] = useState(0);

    const handleBookmarkClick = () => {
        setNumBookmarks(numBookmarks + 1);
    }

    const [numComments, setNumComments] = useState(0);

    const handleCommentClick = () => {
        setNumComments(numComments + 1);
    }


  return(
<div>
<p className="numLikes">❤️ {hearts} </p>

<button className="heart" onClick={handleHeartClick}>❤️</button>

<p className="numBookmarks">🔖 {numBookmarks} </p>

<button className="bookmark" onClick={handleBookmarkClick}>🔖</button>

<p className="numComments">💬 {numComments} </p>

<button className="comment" onClick={handleCommentClick}>💬</button>

</div>
    
  )
}

export default ActionsPanel;