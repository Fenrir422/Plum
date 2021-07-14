import React from 'react';
import classes from './BooksMenu.module.css';




 

const BooksMenu = () => {
    return (
        <div className={classes.menu_wrapper}>
        <div className={classes.header}>
          <span>Groups</span>
        </div>
            <div className={classes.menu}>
            
              <div className={classes.menu_item}></div>
              <div className={classes.menu_item}></div>
              <div className={classes.menu_item}></div>
              <div className={classes.menu_item}></div>
              <div className={classes.menu_item}></div>
              <div className={classes.menu_item}></div>
            </div>
        </div>
  );
}


export default BooksMenu;
