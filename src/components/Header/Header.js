import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

function Header({fullName,...props}) {
  return (
    <div className={classes.nav}>
      <div className={classes.upperNav}>
        <div className={classes.logo}>
          <span>Plummet</span>
        </div>
        <div className={classes.loginBadge}>
        
          {props.isAuth ? 
            <div className={classes.badgeWrapper}>
              <img src={props.props.store.navPhoto} className={classes.navPhoto}/>
              <div >
                <NavLink to={'/profile'} className={classes.loginName}>
                  <span>{fullName}</span>
                </NavLink>
              </div>
              <div onClick={props.showMenu ? ()=>props.hideMenuButton() : ()=>props.showMenuButton()} className={classes.hiddenMenuSign} > ▼ </div>
            </div> :
            <div>
              <NavLink to={'/login'} className={classes.loginName}>
                Login
              </NavLink>

              
            </div>
          }

              {props.isAuth && props.showMenu ?
                <div className={classes.loginMenu}>
                  <NavLink to={'/Profile'} className={classes.loginMenuElement} onClick={()=>props.hideMenuButton()}>Settings</NavLink>
                  <div className={classes.loginMenuElement}>some1</div>
                  <div className={classes.loginMenuElement}>some2</div>
                  <button className={classes.loginMenuElement} onClick={()=>props.LogoutThunk()}>Logout</button>
                </div>
                : null
              }    
        </div>
        
      </div>
      {/* <div className={classes.navbar__line}> </div> */}

    </div>
  );
}

export default Header;
