import React from 'react';
import Comment from './Comment'
import c from './Commentbar.module.css'



  


const Commentbar = (props) => {
  let commentElement = 
    props.comments.map
      (c => <Comment name={c.name} date={c.date} content={c.content} />);

    return (
        <div className={c.comment_wrapper}>
            {commentElement}
        </div>
    );
}
export default Commentbar;