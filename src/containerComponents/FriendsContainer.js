import React from 'react';
import { connect } from 'react-redux';
import Friends from '../components/page-holder/Friends/Friends'
import toggleIsFetching from '../actionCreators/FetchingAC';
import followingInProgress from '../actionCreators/FollowingInProgress'
import { setFriendsThunk, unfollowThunkCreator, followThunkCreator} from '../reducers/friendsListReducer';

class FriendsAPI extends React.Component {
    
    componentDidMount () {
        this.props.getUsers(this.props.pageSize, this.props.currentPage); 
    }
    
    onPageChanged = (currentPage) => {
        this.props.getUsers(this.props.pageSize, currentPage);
    };
    
    render () {  
        return  <>
                    <Friends    totalUsersCount={this.props.totalUsersCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                users={this.props.users}
                                onPageChanged={this.onPageChanged}
                                isFetching={this.props.isFetching}
                                isFollowed={this.props.isFollowed}
                                followingProgress={this.props.followingProgress}
                                unfollowThunk={this.props.unfollowThunkCreator}
                                followThunk={this.props.followThunkCreator}
                                setGroupIndex={this.props.setGroupIndex}
                    />   
        </>       
    }
  }

let mapStateToProps = (store) => {
    return {
        users: store.usersStore.users,
        pageSize: store.usersStore.pageSize,
        totalUsersCount: store.usersStore.totalUsersCount,
        currentPage: store.usersStore.currentPage,
        isFetching: store.usersStore.isFetching,
        isFollowed:store.usersStore.isFollowed,
        followingProgress:store.usersStore.followingProgress,}
};


const FriendsContainer = connect (mapStateToProps, {
        toggleIsFetching,followingInProgress, getUsers: setFriendsThunk, unfollowThunkCreator, followThunkCreator}) (FriendsAPI);


export default FriendsContainer;




// onPageChanged = (event) => {
//     this.props.toggleIsFetching(true);
//     const currentPage = event.currentTarget.dataset.page
//     this.props.setCurrentPage(currentPage);