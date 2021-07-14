import React from 'react';
import c from './Commentbar.module.css'



function Comment(props) {
    return (
        <div className={c.comment_item}>
            <div className={c.item_name}>{props.name}</div>
            <div className={c.item_date}>{props.date}</div>
            <div className={c.item_content}>
            {props.content}
             </div>
             <div className={c.item_buttons}>
                 <div className={c.item_button}>Helpful</div>
                 <div className={c.item_form}></div>
                 <div className={c.item_count}></div>

             </div>
        </div>
        
    );
}

export default Comment;