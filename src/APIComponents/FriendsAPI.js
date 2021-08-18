import React from 'react';
import * as axios from 'axios';
import Friends from '../components/page-holder/Friends/Friends'


class FriendsAPI extends React.Component {
  componentDidMount () {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response =>{
            this.props.setFriends(response.data.items)
      });  
  }

  onPageChanged =(event)=> {
    const currentPage = event.currentTarget.dataset.page
    this.props.setCurrentPage(currentPage);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
        .then(response =>{
            this.props.setFriends(response.data.items)

      });
  }
  render () {
    return <Friends totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}

    />
  }
}

export default FriendsAPI;

