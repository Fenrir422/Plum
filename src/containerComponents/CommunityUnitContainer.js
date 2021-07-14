import { connect } from 'react-redux';
import CommunityUnit from '../components/page-holder/Communities/CommunityUnit/CommunityUnit';
import React from 'react';
import * as axios from 'axios';
import setUsersAC from '../actionCreators/setUsersAC'
import { withRouter } from 'react-router';


class CommunityUnitContainer extends React.Component {  

    componentDidMount () {   
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(response =>{
                this.props.setUsers(response.data.items)
            });
    };
    
    render () {
        return  <>
                    <CommunityUnit  
                                    users={this.props.CommunityUsersList}
                                    props={this.props}
                                    CommunityGroups={this.props.CommunityGroups}
                    />    
        </>       
    }
  }

let mapStateToProps = (store) => {
    return {
        CommunityUsersList: store.communityStore.users,
        CommunityGroups:store.communityStore.CommunityGroups

    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            return dispatch(setUsersAC(users));
        }
    }
};
withRouter(CommunityUnitContainer)
export default connect (mapStateToProps, mapDispatchToProps) (CommunityUnitContainer);
