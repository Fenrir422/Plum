import React from 'react';
import classes from './BookItem.module.css';
import {NavLink} from "react-router-dom";


 

const BookItem = (props) => {
    return (
      <div>
          <div className={classes.item}>
            <div className={classes.Image}><img className={classes.Image} src={props.coverURL}/></div>
            <div className={classes.button2}></div>
            <div className={classes.Description}>{props.name}</div>

            
            
            <NavLink to={`/books/${props.id}`} className={classes.buttonDetailes}>More
            </NavLink>
          </div>
      </div>
    )
};


export default BookItem;
