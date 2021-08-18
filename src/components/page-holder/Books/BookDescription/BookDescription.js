import React from 'react';
import classes from './BookDescription.module.css';



 

const BookDescription = (props) => {
    const id = props.match.params.id
    const selectedBook = props.books.find(b => b.id === id)
    return (
      <div className={classes.wrapper}>
        <div className={classes.image}><img  src={selectedBook.coverURL}/></div>
        <div className={classes.booksName}>{selectedBook.name}</div>
        
        
          {props.name}
          
      </div>
    )
};


export default BookDescription;
