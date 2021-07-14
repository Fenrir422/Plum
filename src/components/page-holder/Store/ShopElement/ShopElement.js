import React from 'react';
import classes from './ShopElement.module.css';
import ShopComments from './ShopComments';


 

function ShopElement(props) {
    const id = props.match.params.id
    const selectedBook = props.bookShopList.find(l => l.id === id)

    const OtherUsersReviews = props.reviewList.map (s => 
      <ShopComments userName={s.userName} date={s.date} likesCount={s.likesCount} 
      recomendations={s.recomendations} reviewText={s.reviewText} id={s.id} addLike={props.addLike}/>);
    
    let userReview = React.createRef();

    let onAddReview = () => {
      props.addReview();
    }

    let onReviewChange = () => {
        let newReview = userReview.current.value;
        props.changeReviev(newReview);
    }


    return (
      <div className={classes.wrapper}>
        <div><img src={selectedBook.coverURL}/></div>
        <div></div>
        <div className={classes.userCommentWrapper}>
            <textarea ref={userReview} value={props.reviewText} className={classes.userComment} onChange={(event)=>onReviewChange(event)}>

            </textarea>
            <div className={classes.buttonWrapper}>
              <div onClick={onAddReview} className={classes.acceptButton}>
                <span>Тиц</span>
              </div>
              <div className={classes.copyButton}>

              </div>
            </div>
            
        </div>
        <div className={classes.ShopCommentsWrapper}>
          {OtherUsersReviews}
        </div>
        
      </div>
    
  );
}
export default ShopElement;
