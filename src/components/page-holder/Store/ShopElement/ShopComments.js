import React from 'react';
import classes from './ShopComments.module.css';


function ShopComments(props) {
    const addLikeFunction = (event) => {
      props.addLike(event.currentTarget.dataset.id)
    }

    return (
        <div className={classes.commentsWrapper}>
          <div>
            <div className={classes.headerWrapper}>
                <div className={classes.userName}>{props.userName}</div>
                <div className={classes.recomendations}>{props.recomendations}</div>
            </div>
            <div className={classes.commentDate}>{props.date}</div>
          </div>
          <div className={classes.reviewText}>
            <span>{props.reviewText}</span>
          </div>
          <div className={classes.likeWrapper}>
            <div className={classes.likesCount}>
              likes:
              {props.likesCount}
            </div>
            <div className={classes.likeButton} onClick={addLikeFunction} data-id={props.id}>
              <span>Like</span>
            </div>
          </div>
          

        </div>
    
  );
}
export default ShopComments;
