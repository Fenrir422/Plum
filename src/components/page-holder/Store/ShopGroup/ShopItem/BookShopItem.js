import React from 'react';
import { NavLink, Route} from "react-router-dom";
import classes from '../ShopItem/BookShopItem.module.css'


 

function BookShopItem (props) {
    return (
      <div className={classes.item}>
        <NavLink to={`/store/${props.id}`}> <img className={classes.image} src={props.coverURL}/></NavLink>
        <div></div>
        <div className={classes.description}>
          <div>{props.writer}</div>
          <div>{props.name}</div>
        </div>
        
      </div>
  );
}
export default BookShopItem;
