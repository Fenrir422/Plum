import React from 'react';
import { connect } from 'react-redux';
import BooksDescription from '../components/page-holder/Books/BookDescription/BookDescription'



let mapStateToProps = (store) => {
    return {
        books: store.booksStore.books
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

const BooksDescriptionContainer = connect (mapStateToProps, mapDispatchToProps) (BooksDescription);


export default BooksDescriptionContainer;