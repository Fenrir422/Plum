import React from 'react';
import classes from './ProfileMenu.module.css';
import { NavLink } from 'react-router-dom';
import settingsLogo from '../../../../images/settings.png'
import libraryLogo from '../../../../images/library.png'




 

const ProfileMenu = (props) => {
    return (
        <div className={classes.menu_wrapper}>
        <div className={classes.header}>
          <span>Groups</span>
        </div>
            <div className={classes.menu}>
              <NavLink to={`/books`} className={classes.menu_item}> library </NavLink>
              <div className={classes.menu_item} onClick={()=>props.libraryToggle()}><img img src={libraryLogo}/></div>
              <div className={classes.menu_item} onClick={()=>props.activateSettings()}><img src={settingsLogo}/></div>
              <div className={classes.menu_item}></div>
              <div className={classes.menu_item}></div>
              <div className={classes.menu_item}></div>
            </div>
        </div>
  );
}


export default ProfileMenu;
