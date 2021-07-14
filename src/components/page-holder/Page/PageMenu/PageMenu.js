import React from 'react';
import classes from './PageMenu.module.css';
import { NavLink} from "react-router-dom";
import fragmentImage from '../../../../images/fragment.png';
import settingsImage from '../../../../images/settings.png'
import commentImage from '../../../../images/comment.png'
 

function PageMenu(props) {
    return (
      <div className={classes.menu_wrapper}>
        <div className={classes.menu}>
          <NavLink to='/page/fragmentbar' className={classes.item}><img className={classes.image} src={fragmentImage}/>
          </NavLink>
          <NavLink to='/page/commentbar' className={classes.item}><img className={classes.image} src={commentImage}/>
          </NavLink>
          <div className={classes.item}>
            <img className={classes.image} src={settingsImage}/>
          </div>
          <div className={classes.item}></div>
          <div className={classes.item}></div>
          <div className={classes.item}></div>
        </div>
      </div>
  );
}
export default PageMenu;
