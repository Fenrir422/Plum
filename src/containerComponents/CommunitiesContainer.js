import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import setUsersAC from '../actionCreators/setUsersAC';
import Communities from '../components/page-holder/Communities/Communities'



class CommunitiesContainer extends React.Component {
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
        .then(response=>{
            this.props.setUsers(response.data.items)
        });
    }

    render () {
        return  <div>   
                    <Communities    users={this.props.CommunityUsersList}
                                    CommunityGroups={this.props.CommunityGroups}/>
                </div>   
    }
};



let mapStateToProps = (store) => {
    return {
        CommunityGroups: store.communityStore.CommunityGroups,
        CommunityUsersList: store.communityStore.users,
        
    }
};

let mapDispatchToProps =(dispatch)=> {
    return {
        setUsers:(users)=>{
            return dispatch(setUsersAC(users))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (CommunitiesContainer);

