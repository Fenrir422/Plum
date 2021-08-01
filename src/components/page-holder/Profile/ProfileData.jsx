import React from 'react' 
import classes from './ProfileData.module.css'  

    const ProfileData=({profileData,...props})=>{
        return(
            <div className={classes.profileDataWrapper}>
                <div className={classes.profileDataItem}><b>About me: </b>{profileData.aboutMe}</div>
                <div className={classes.profileDataItem}>
                    <b>Looking for a job: </b>{profileData.lookingForAJob ? 'yes' : 'no' }
                    <div className={classes.profileDataItem}><b>My skills: </b>{profileData.lookingForAJobDescription}</div>
                </div>
            
                <div>
                    {profileData.contacts?
                    <div  className={classes.profileDataItem}>
                        <b>Contacts:</b> {Object.keys(profileData.contacts).map(key=>{
                        return <Contacts key={key} contactTitle={key} contactValue={profileData.contacts[key]}/>
                        })}
                    </div>
                    :'loading...'}
                </div>
            </div>
        )
    }
    
    export const Contacts =({contactTitle, contactValue})=>{
        return(
            <div className={classes.contactsItem}>
                <a>{contactTitle}</a> : 
                <a href={contactValue}>{contactValue} </a>
            </div>
        )
    }

    export default ProfileData
                    
                    