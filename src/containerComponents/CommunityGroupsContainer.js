import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import setUsersAC from '../actionCreators/setUsersAC';
import CommunityGroupWrapper from '../components/page-holder/Communities/CommunityGroups/CommunityGroupWrapper';



class CommunitiyGroupsContainer extends React.Component {

    render () {
        return  <div>   
                    <CommunityGroupWrapper      users={this.props.CommunityUsersList}
                                                CommunityGroups={this.props.CommunityGroups}
                                                sortedGroupMembers={this.props.sortedGroupMembers}/>
                </div>   
    }
};



let mapStateToProps = (store) => {
    return {
        CommunityGroups: store.communityStore.CommunityGroups,
        CommunityUsersList: store.communityStore.users,
        sortedGroupMembers: store.communityStore.sortedGroupMembers
    }
};

let CommunitiyGroupsContainerWithRouter = withRouter (CommunitiyGroupsContainer)
export default connect (mapStateToProps,{}) (CommunitiyGroupsContainerWithRouter);

