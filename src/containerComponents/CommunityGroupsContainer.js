import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import setUsersAC from '../actionCreators/setUsersAC';
import CommunityGroupWrapper from '../components/page-holder/Communities/CommunityGroups/CommunityGroupWrapper';



class CommunitiyGroupsContainer extends React.Component {

    render () {
        return  <div>   
                    <CommunityGroupWrapper    users={this.props.CommunityUsersList}
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


export default connect (mapStateToProps,{}) (CommunitiyGroupsContainer);

