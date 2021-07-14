import React from 'react';
import classes from './FriendElement.module.css';
import ifNull from "../../../../images/ifNull.png"
import { NavLink } from 'react-router-dom';



function FriendElement(props) {

    return (
        <div className={classes.wrapper}>
            <div>{props.name}</div>
            <div>{props.id}</div>
            <NavLink to={'/friends/profile'}>
                <div><img src={props.photos.small ? props.photos.small : ifNull} className={classes.image} /></div>
            </NavLink>
        </div>
  );
}
export default FriendElement;
