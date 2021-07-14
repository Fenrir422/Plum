import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import CommunityGroupContent from '../components/page-holder/Communities/CommunityGroup/CommunityGroupContent'

let mapStateToProps =(store)=>{
    return {
        CommunityGroup: store.communityStore.CommunityGroups
    }
}
let mapDispatchToProps =()=> {
    return {
        
    }
}
let CommunityGroupContentWithURL = withRouter(CommunityGroupContent);
let CommunityGroupContentContainer = connect (mapStateToProps, mapDispatchToProps) (CommunityGroupContentWithURL);

export default CommunityGroupContentContainer;