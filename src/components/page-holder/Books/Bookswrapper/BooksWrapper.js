import React from 'react';
import classes from './BooksWrapper.module.css';
import BookItem from '../BooksItem/BookItem';
import { NavLink, Redirect } from 'react-router-dom';


const BooksWrapper = (props) => {
  var url = new URL(window.location.href);
  var currentPage = Number(url.searchParams.get('page') || 1);


  let booksCount = Math.ceil(props.books.length / props.pageSize);
  let pages = [];
        for (let i=1; i <= booksCount; i++){
          pages.push(i);
        }
  let skipParam = 0;


  const untilParam = (props.pageSize * currentPage);


  if (currentPage === 1) {
    skipParam = 0; 
  } else {
    skipParam = ((currentPage -1) * props.pageSize);
  }
  
  const BooksElement = props.books.slice(skipParam, untilParam).map (b => 
    <BookItem name={b.name} date={b.date} content={b.content} id={b.id} coverURL={b.coverURL}/>);



    
    return (
      <div>
        <div>
            {pages.map(p=>{
              return <NavLink to={`/books/?page=${p}`} > {p} </NavLink>
            })}
        </div>
        <div className={classes.books_wrapper}> 
          {BooksElement}
        </div>
      </div>
  );
}


export default BooksWrapper;
// className={true && classes.selected_page }