import React from 'react';
import classes from '../Communities/Communities.module.css';
import {Route} from "react-router-dom";
import CommunityContainer from '../../../containerComponents/CommunitiesContainer';
import CommunityUnitContainer from '../../../containerComponents/CommunityUnitContainer'
import CommunityGroupContentContainer from '../../../containerComponents/CommunityGroupContentContainer';


function CommunitiesWrapper () {
    return (
      <div className={classes.page_holder}>
            <Route exact path='/communities' render = {()=> <CommunityContainer/>}/>
            <Route exact path='/communities/:id' render ={() => <CommunityGroupContentContainer/>} /> 
            {/* <Route exact path='/communities/:id' render = {(props1)=> <CommunityUnitContainer {...props1}/>}/>      */}
      </div>
  );
}
export default CommunitiesWrapper;





