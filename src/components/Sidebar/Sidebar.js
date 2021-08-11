import React from 'react';
import classes from './Sidebar.module.css';
import { NavLink, Route, BrowserRouter } from "react-router-dom";



function Sidebar() {
  return (
      <div className={classes.sidebar}>
        <div className={classes.item}>
          <NavLink to='/books' className={classes.item}>- My library -</NavLink>
          <NavLink to='/page' className={classes.item}>- Reader -</NavLink>
          <NavLink to='/friends' className={classes.item}>Friends</NavLink>
          <NavLink to='/communities' className={classes.item}>- Communities -</NavLink>
          <NavLink to='/store' className={classes.item}>Store</NavLink>
          <NavLink to='/poligon' className={classes.item}>Poligon</NavLink>
          
          <div></div>
          
        </div>
      </div>
  );
}

export default Sidebar;
