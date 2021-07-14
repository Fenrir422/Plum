import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Profile from '../components/page-holder/Profile/Profile'
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, setMainPhotoThunkCreator, } from '../reducers/ProfileReducer'
import {LogoutThunk} from '../reducers/authReducer'


class ProfileContainer extends React.Component{

    refreshProfile () {
        let userId =this.props.match.params.userId;
        if(!userId){
            userId='17625'
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }
    

    componentDidMount(){
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    
    render(){
        return ( <>
            <Profile    authId={this.props.authId} 
                        userId={this.props.profileInfo.userId} 
                        profileInfo={this.props.profileInfo} 
                        updateStatus={this.props.updateStatusThunkCreator} 
                        setMainPhoto={this.props.setMainPhoto}
                        LogoutThunk={this.props.LogoutThunk}
                        isAuth={this.props.isAuth}
            />
        </>
        )
    }
}

const mapStateToProps =(store)=>{
    return{
        profileInfo:store.profileStore, 
        authId:store.authStore.id,
        isAuth: store.authStore.isAuth
        
        
    }
}

let ProfileContainerWithUrl = withRouter(ProfileContainer)
export default connect  (mapStateToProps,{getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, 
                        setMainPhoto: setMainPhotoThunkCreator, LogoutThunk} )(ProfileContainerWithUrl);



