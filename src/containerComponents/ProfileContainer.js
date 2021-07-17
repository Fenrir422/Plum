import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Profile from '../components/page-holder/Profile/Profile'
import { getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, setMainPhotoThunkCreator, setProfileDataThunk} from '../reducers/ProfileReducer'
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
                        userId={this.props.profileData.userId} 
                        profileData={this.props.profileData} 
                        updateStatus={this.props.updateStatusThunkCreator} 
                        setMainPhoto={this.props.setMainPhoto}
                        LogoutThunk={this.props.LogoutThunk}
                        isAuth={this.props.isAuth}
                        setProfileDataThunk={this.props.setProfileDataThunk}
            />
        </>
        )
    }
}

const mapStateToProps =(store)=>{
    return{
        profileData:store.profileStore, 
        authId:store.authStore.id,
        isAuth: store.authStore.isAuth
        
        
    }
}

let ProfileContainerWithUrl = withRouter(ProfileContainer)
export default connect  (mapStateToProps,{getProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, 
                        setMainPhoto: setMainPhotoThunkCreator, LogoutThunk, setProfileDataThunk} )(ProfileContainerWithUrl);



