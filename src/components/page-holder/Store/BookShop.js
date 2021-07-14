import React from 'react';
import classes from './BookShop.module.css';
import {Route} from "react-router-dom";
import BookShopMenu from './ShopMenu/ShopMenu';
import BookShopGroupContainer from '../../../containerComponents/BookShopGroupContainer'
import ShopElementContainer from '../../../containerComponents/ShopElementContainer';

 

function BookStore(props) {
  console.log('store', props)
    return (
      <div className={classes.page_holder}>
        <BookShopMenu />
        <Route exact path="/store" render={()=><BookShopGroupContainer />}/>
        <Route exact path="/store/:id" render={(props1)=><ShopElementContainer {...props1}/>}/>
      </div>
    
  );
}
export default BookStore;
