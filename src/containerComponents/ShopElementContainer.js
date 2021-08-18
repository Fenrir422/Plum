import React from 'react';
import { connect } from 'react-redux';
import ShopElement from '../components/page-holder/Store/ShopElement/ShopElement';
import CHANGE_REVIEW_ACTION_CREATOR from '../actionCreators/reviewActionCreator'
import ADD_REVIEW_ACTION_CREATOR from '../actionCreators/addReviewActionCreator'
import ADD_LIKE_ACTION_CREATOR from '../actionCreators/addLikeActionCreator'



let mapStateToProps = (store) => {
    return {
        bookShopList: store.booksShopStore.bookShopList,
        reviewList: store.booksShopStore.reviewList,
        reviewText: store.booksShopStore.reviewText

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addReview: ()=> {dispatch(ADD_REVIEW_ACTION_CREATOR())},
        changeReviev: (newReview)=> {dispatch(CHANGE_REVIEW_ACTION_CREATOR(newReview))},
        addLike: (id)=>{dispatch(ADD_LIKE_ACTION_CREATOR(id))}
    }
};

const ShopElementContainer = connect (mapStateToProps, mapDispatchToProps) (ShopElement);


export default ShopElementContainer;