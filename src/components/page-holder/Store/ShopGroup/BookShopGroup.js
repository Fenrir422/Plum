import React from 'react';
import classes from './BookShopGroup.module.css';
import BookShopItem from './ShopItem/BookShopItem'


 

function BookShopGroup(props) {
  console.log(props, 'shopshop')
  const BookStoreElement = props.bookShopList.map (l => 
    <BookShopItem writer={l.writer} name={l.name} description={l.description} id={l.id} coverURL={l.coverURL}/>);
    return (
      <div className={classes.container}>
        {BookStoreElement}
      </div>
  );
}
export default BookShopGroup;
