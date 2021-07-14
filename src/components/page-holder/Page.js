import React from 'react';
import classes from './Page.module.css';
import { NavLink, Route, BrowserRouter } from "react-router-dom";
import Commentbar from './Commentbar/Commentbar';
import Fragmentbar from './Fragment/Fragmentbar';
 

function Page(props) {
  debugger
    return (
    <BrowserRouter>
      <div className={classes.page_holder}>
        <div className={classes.page}>
        </div>
        <div className={classes.menu_wrapper}>
          <div className={classes.menu}>
            <NavLink to='/fragmentbar' className={classes.item}>
            </NavLink>
            <NavLink to='/commentbar' className={classes.item}>
            </NavLink>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
            <div className={classes.item}></div>
          </div>
        </div>
        <Route path='/fragmentbar' render={() => <Fragmentbar fragment={props.fragment}/>} />
        <Route path='/commentbar' render={() => <Commentbar comments={props.comments}/>} />



      </div>
    </BrowserRouter>
  );
}

export default Page;
