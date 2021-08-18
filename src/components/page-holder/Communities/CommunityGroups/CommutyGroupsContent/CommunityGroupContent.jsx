import React from 'react';
import classes from '../CommunityGroup.module.css'


function CommunityGroupContent ({props,...p}) {
    const id = props.match.params.id;
    const selectedGroup = props.CommunityGroup.find(g=>g.id === id)
    
    return (
        <div>
            {props.sortedGroupMembers[selectedGroup.group]? props.sortedGroupMembers[selectedGroup.group].map(sorted=>(
                <div>{sorted.name}</div>
            )):null}
            <div>{selectedGroup.GroupName}</div>
            <div className={classes.unitContainer}></div>
        </div>
    )
}


export default CommunityGroupContent;