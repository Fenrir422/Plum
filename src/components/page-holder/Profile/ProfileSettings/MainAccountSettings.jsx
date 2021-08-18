import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './AccountSettings.module.css'
import arrowIcon from '../../../../images/arrow.png'
import closeIcon from '../../../../images/cross.png'






const MainAccountSettings =({activateSettings,menuToggle,profileData,...props})=>{
    return(
        <div className={classes.settingsDefault}>
            <div className={classes.onPrevious}>
                <img className={classes.arrow} src={arrowIcon} onClick={()=>activateSettings()}/>
                <img className={classes.cross} onClick={()=>activateSettings()} src={closeIcon} />
            </div>
            

            <div><b>Account Settings</b></div>
            <div className={classes.mainAccountSettingsLogo}>
                <img src={profileData.photos.small} className={classes.AccountSettingsLogoImg}/>
                <div className={classes.AccountSettingsLogoName}>
                    <span>{profileData.fullName}</span>
                </div>
            </div>
            <div className={classes.AccountSettingsItem} onClick={()=>menuToggle("profile-edit")}>Profile Edit</div>
            <div className={classes.AccountSettingsItem}>   Reading settings    </div>
            <div className={classes.AccountSettingsItem}>   Lenguage    </div>
            <div className={classes.AccountSettingsItem}>   Paymant Methods </div>
            <div className={classes.AccountSettingsItem}>   Advanced    </div>
            <div className={classes.AccountSettingsItem}>   Logout  </div>
        </div>
    )
}

export default MainAccountSettings;