import React from 'react';
import classes from './Page.module.css';
import {Route} from "react-router-dom";
import PageMenu from './PageMenu/PageMenu';
import FragmentbarContainer from '../../../containerComponents/FragmentbarContainer'
import CommentbarContainer from '../../../containerComponents/CommentbarContainer'
 

function Page(props) {
    return (
   
      <div className={classes.page_holder}>
        <PageMenu />
          <div className={classes.page}></div>
          <Route path='/page/fragmentbar' render={() => <FragmentbarContainer />} />
          <Route exact path='/page/commentbar' render={() => <CommentbarContainer />}/>
      </div>
    
  );
}
export default Page;