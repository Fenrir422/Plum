import classes from './Profile.module.css'
import React, { useState } from 'react'
import userImg from '../../../images/usergal.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileMenu from './ProfileMenu/ProfileMenu'






const Profile =({userId, authId, setMainPhoto, profileInfo,...props})=>{
    console.log(profileInfo, 'safafaawfafwfwa')
    let isOwner = null;

    if (authId === userId){
       isOwner = true;
    }

    const onMainPhotoSelect=(e)=>{
        if(e.target.files.length) {
            setMainPhoto(e.target.files[0])
        }
    }

    let [ToggleOn, setToggle] = useState(false)
    

    const libraryToggle =()=>{
        setToggle(!ToggleOn);
    }
    


    return(
        <div className={classes.ProfileWrapper}>
            <ProfileMenu libraryToggle={libraryToggle} />
            <div>
                <div className={classes.profilePhotoWrapper}><img src={profileInfo.photos.large ? profileInfo.photos.large : userImg} className={classes.profilePhoto}/></div>
                {props.isAuth && isOwner && <input type={'file'} onChange={onMainPhotoSelect}/>}
                
                <div>status: {profileInfo.status}</div>
            </div>
            <div>
                <div className={classes.profileName}>{profileInfo.fullName}</div>
                <ProfileStatusWithHooks updateStatus={props.updateStatus} props={props} status={profileInfo.status}/>
            </div>
            {ToggleOn ? <div className={classes.libraryWrapper}> тут буде бібліотека </div> : null}
            
        </div>
    )
}

export default Profile