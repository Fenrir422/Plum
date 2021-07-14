import React from 'react';
import Comment from './Comment'
import c from './Commentbar.module.css'
import MyCommentContainer from './MyCommentContainer';

  

const Commentbar = (props) => {
  const commentElement = props.comments.map (c => <Comment name={c.name} date={c.date} content={c.content} />);
    return (
        <div className={c.comment_wrapper}>
            {commentElement}
            <MyCommentContainer />
        </div>
    ); 
}

export default Commentbar;