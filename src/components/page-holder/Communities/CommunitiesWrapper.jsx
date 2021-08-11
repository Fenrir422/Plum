import React from 'react';
import classes from '../Communities/Communities.module.css';
import {Route} from "react-router-dom";
import CommunityGroupsContainer from '../../../containerComponents/CommunityGroupsContainer';
import CommunityUnitContentContainer from '../../../containerComponents/CommunityGroupContentContainer';


function CommunitiesWrapper () {
    return (
      <div className={classes.page_holder}>
            <Route exact path='/communities' render = {()=> <CommunityGroupsContainer/>}/>
            <Route exact path='/communities/:id' render ={() => <CommunityUnitContentContainer/>} /> 
            {/* <Route exact path='/communities/:id' render = {(props1)=> <CommunityUnitContainer {...props1}/>}/>      */}
      </div>
  );
}
export default CommunitiesWrapper;





