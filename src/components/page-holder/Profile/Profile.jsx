import classes from './Profile.module.css'
import React, { useState } from 'react'
import userImg from '../../../images/usergal.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileMenu from './ProfileMenu/ProfileMenu'
import ProfileDataReduxForm from './ProfileForm'






const Profile =({userId, authId, setMainPhoto, profileData,...props})=>{
    console.log(profileData, 'safafaawfafwfwa')

    let [ProfileEditMode, setProfileEditMode] =useState(false);

    const toggleProfileEditMode =()=>{
        setProfileEditMode(!ProfileEditMode)
    }

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

    const onSubmit = (FormData) =>{
        console.log(FormData, 'aboutMe')
        props.setProfileDataThunk(FormData)
        toggleProfileEditMode()
    }
    


    return(
        <div className={classes.ProfileWrapper}>
            <ProfileMenu libraryToggle={libraryToggle} />
            <div>
                <div className={classes.profilePhotoWrapper}><img src={profileData.photos.large ? profileData.photos.large : userImg} className={classes.profilePhoto}/></div>
                {props.isAuth && isOwner && <input type={'file'} onChange={onMainPhotoSelect}/>}
                <div>status: {profileData.status}</div>
                
                <div className={classes.greenButton} onClick={()=>toggleProfileEditMode()}>{ProfileEditMode? 'Edit' : 'Save'}</div>
                {ProfileEditMode ? 
                    <ProfileDataReduxForm profileData={profileData} initialValues={profileData} onSubmit={onSubmit}/>
                    :
                    <div>
                        <div><b>About me: </b>{profileData.aboutMe}</div>
                        <div><b>Looking for a job: </b>{profileData.lookingForAJob ? 'yes' : 'no' }</div>
                        <div>
                            {profileData.contacts?
                            <div>
                                <b>Contacts:</b> {Object.keys(profileData.contacts).map(key=>{
                                return <Contacts key={key} contactTitle={key} contactValue={profileData.contacts[key]}/>
                                })}
                            </div>
                            :'loading...'}
                        </div>
                    </div>}
                
            </div>
            <div>
                <div className={classes.profileName}>{profileData.fullName}</div>
                <ProfileStatusWithHooks updateStatus={props.updateStatus} props={props} status={profileData.status}/>
            </div>
            {ToggleOn ? <div className={classes.libraryWrapper}> тут буде бібліотека </div> : null}
            
        </div>
    )
}

const Contacts =({contactTitle, contactValue})=>{
    return(
        <div>
            <b>{contactTitle}</b> : {contactValue}
        </div>
    )
}

export default Profile