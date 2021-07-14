import React from 'react';
import classes from './ShopMenu.module.css';
import { NavLink} from "react-router-dom";

 

function BookShopMenu(props) {
    return (
        <div className={classes.menu_wrapper}>
          <div className={classes.menu}>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
          </div>
        </div>
  );
}

export default BookShopMenu;
