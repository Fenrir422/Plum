import React from 'react';
import classes from './CommunityGroup.module.css';
import {NavLink} from "react-router-dom";



function CommunityGroupWrapper (props) {
    return (
        <div className={classes.GroupsWrapper} >
             {props.CommunityGroups.map(g=>(
                <div className={classes.groupContainer}>
                    <NavLink to={`/communities/${g.id}`}>
                        <div className={classes.groupName}>{g.GroupName}</div>
                            <img className={classes.groupLogo} src={g.photo}/>
                            <div className={classes.unitUsersCount}>Joined:</div>
                        <div></div>
                    </NavLink>
                </div>
            ))
            }          
        </div>
    );
}
export default CommunityGroupWrapper;
