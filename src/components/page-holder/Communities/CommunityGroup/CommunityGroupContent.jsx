import React from 'react';
import classes from './CommunityGroup.module.css'


function CommunityGroupContent (props) {
    
    console.log(props, 'a vono vopshe tut')
    const id = props.match.params.id;
    const selectedGroup = props.CommunityGroup.find(g=>g.id === id)
    const group = selectedGroup.group;
    console.log(group)
    return (
        <div>
            <div>{selectedGroup.GroupName}</div>
            <div className={classes.unitContainer}></div>
        </div>
    )
}
export default CommunityGroupContent;