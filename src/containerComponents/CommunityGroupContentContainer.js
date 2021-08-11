import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import CommunityGroupContent from '../components/page-holder/Communities/CommunityGroups/CommutyGroupsContent/CommunityGroupContent'
import {setCommunityMembersThunk} from '../reducers/friendsListReducer'



class ClassCommutyGroupContent extends React.Component  {
    
    componentDidMount () {
        console.log(this.props, 'function')
        this.props.getMembers(40, 1);
    }

    componentDidUpdate(){

    }

    
    render(){
        return <div>
            <CommunityGroupContent props={this.props} communityMembers={this.communityMembersWithGroupIndex}/>
        </div>
    }
}


let mapStateToProps =(store)=>{
    return {
        CommunityGroup: store.communityStore.CommunityGroups,
        communityMembers: store.usersStore.communityMembers
    }
}



let CommunityGroupContentWithURL = withRouter(ClassCommutyGroupContent);
let CommunityGroupContentContainer = connect (mapStateToProps, {getMembers: setCommunityMembersThunk,}) (CommunityGroupContentWithURL);

export default CommunityGroupContentContainer;