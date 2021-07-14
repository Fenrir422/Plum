import React from 'react';
import classes from '../CommunityUnit/CommunityUnit.module.css'

function CommunityUnit (props) {

    const id = props.props.match.params.id
    const selectedGroup = props.CommunityGroups.find(g => g.id === id)
    console.log(props, 'якого хуя нічо не вивело')
    return (
        <div className={classes.page_holder}>
            <div className={classes.unitHeader}>{selectedGroup.GroupName}</div>
            {props.users.map(u=>(
            <div>
              <div>{u.name}</div>
              <div>{selectedGroup.id}</div>
                  <div><img src={u.photos.small} className={classes.image} /></div>
            </div>
            ))
            }

        </div>
    );
}
export default CommunityUnit;