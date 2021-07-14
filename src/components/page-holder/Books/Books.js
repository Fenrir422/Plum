import React from 'react';
import classes from './Books.module.css';
import BooksMenu from './BooksMenu/BooksMenu';
import {Route} from "react-router-dom";
import BooksWrapperContainer from '../../../containerComponents/BooksWrapperContainer';
import BookDescriptionContainer from '../../../containerComponents/BookDescriptionContainer';

const Books = (props) => {
    return (
      <div className={classes.wrapper}>
        
          <BooksMenu />
          <Route exact path='/books' render={(props1) => <BooksWrapperContainer {...props1} />} />
          <Route exact path='/books/:id' render={(props1) =>  <BookDescriptionContainer {...props1}/> } />
      </div>
  );
}


export default Books;
