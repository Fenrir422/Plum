import React, { useState } from 'react'
import ProfileDataReduxForm from '../ProfileForm'
import classes from './AccountSettings.module.css'
import MainAccountSettings from './MainAccountSettings'
import photoIcon from '../../../../images/photo.png'
import arrowIcon from '../../../../images/arrow.png'
import closeIcon from '../../../../images/cross.png'




const AccountSettings =({activateSettings,onSubmit,profileData,...props})=>{

    let [menuToggleValue, menuSwitch] =useState("defolt");
    let [choosePhoto, choosePhotoHover] =useState(false);

    const choosePhotoHoverOn=()=>{
        choosePhotoHover(true)
    }

    const choosePhotoHoverOff=()=>{
        choosePhotoHover(false)
    }
 

    const menuToggle = (value)=> {
        menuSwitch(value)
    }
    

    return(
        <div className={classes.settingsBackground}>
            <div className={classes.settingsWrapper}>
                {menuToggleValue === "defolt" && <MainAccountSettings activateSettings={activateSettings} profileData={profileData} menuToggle={menuToggle} menuToggle={menuToggle}/> || 
                menuToggleValue === "profile-edit" && 
                    <div>
                        <div className={classes.onPrevious}>
                            <img className={classes.arrow} src={arrowIcon} onClick={()=>menuToggle("defolt")}/>
                            <img className={classes.cross} onClick={()=>activateSettings()} src={closeIcon} />
                        </div>
                        
                        {/* className={choosePhoto ? classes.editPhotoLogoOn : classes.editPhotoLogoOff} */}
                        
                        <div className={classes.accountSettingsLogoWrapper}>
                            <label for="accountPhoto" className={classes.AccountSettingsLogo}>
                                    <div    className={classes.editPhotoLogo}
                                            className={choosePhoto? classes.editPhotoLogoOn + " " + classes.editPhotoLogo:classes.editPhotoLogoOff + " " + classes.editPhotoLogo}
                                            onMouseOver={()=>choosePhotoHoverOn()}
                                            onMouseOut={()=>choosePhotoHoverOff()}
                                    >
                                        <img src={photoIcon}/>
                                    </div>
                                    <img src={profileData.photos.small} className={classes.AccountSettingsLogoImg} />
                                
                                
                                <div className={classes.AccountSettingsLogoName}>
                                    <span>{profileData.fullName}</span>
                                </div>
                            </label>
                        </div>
                        <input type={'file'} className={classes.accountPhoto} id='accountPhoto'onChange={props.onMainPhotoSelect}/>
                        
                        <ProfileDataReduxForm profileData={profileData} initialValues={profileData} onSubmit={onSubmit} />
                    </div>
                }
            </div>
        </div>
        
    )
}

export default AccountSettings