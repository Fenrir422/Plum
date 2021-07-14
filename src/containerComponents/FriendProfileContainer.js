import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FriendProfile from '../components/page-holder/Friends/FriendsProfile/FriendProfile';



let mapStateToProps = (store) => {
    return {
        users: store.usersStore.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};


let friendsProfileWithUrl = withRouter(FriendProfile)

export default connect (mapStateToProps, mapDispatchToProps) (friendsProfileWithUrl) ;