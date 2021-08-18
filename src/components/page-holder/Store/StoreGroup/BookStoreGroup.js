import React from 'react';
import classes from './BookStoreGroup.module.css';
import { NavLink, Route} from "react-router-dom";
import BookStoreItem from './StoreItem/BookShopItem'


 

function BookStoreGroup(props) {
  const BookStoreElement = props.booksShopStore.bookStoreList.map (l => 
    <BookStoreItem writer={l.writer} name={l.name} description={l.description} id={l.id} coverURL={l.coverURL}/>);
    return (
      <div className={classes.container}>
        {BookStoreElement}
      </div>
  );
}
export default BookStoreGroup;
