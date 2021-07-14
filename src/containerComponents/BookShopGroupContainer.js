import React from 'react';
import { connect } from 'react-redux';
import BookShopGroup from '../components/page-holder/Store/ShopGroup/BookShopGroup';



let mapStateToProps = (store) => {
    return {
        bookShopList: store.booksShopStore.bookShopList
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

const BookShopGroupContainer = connect (mapStateToProps, mapDispatchToProps) (BookShopGroup);


export default BookShopGroupContainer;