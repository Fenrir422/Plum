import React from 'react';
import { connect } from 'react-redux';
import Commentbar from '../components/page-holder/Page/Commentbar/Commentbar';



let mapStateToProps = (store) => {
    return {
        comments: store.commentsStore.comments
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

const CommentbarContainer = connect (mapStateToProps, mapDispatchToProps) (Commentbar);


export default CommentbarContainer;