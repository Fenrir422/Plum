import React from 'react';
import CommunityGroupWrapper from './CommunityGroup/CommunityGroupWrapper'
import classes from '../Communities/Communities.module.css'


function Communities (props) {
    
    return (
        <div className={classes.Units_wrapper}>
            <div>   <CommunityGroupWrapper  CommunityGroups={props.CommunityGroups}
                                            users={props.users}
                    />
            </div>
        </div>
  );
}
export default Communities;
