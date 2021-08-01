import classes from './Profile.module.css'
import React, {useEffect, useState} from 'react'




const ProfileStatusWithHooks =(props)=> {


    let [editMode, setEditMode] =useState(false);
    let [status, setStatus] =useState(props.status);
    
    useEffect (()=>{
        setStatus(props.status)
    }, [props.status])


    const activateEditMode = ()=>{ 
        setEditMode(true)
    }
    
    
    const deactivateEditMode =()=>{
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange =(st)=>{
        setStatus(st.currentTarget.value)
    }

    
    

    return(
        <div>
            <div className={classes.profileStatusWrapper}>
                {editMode ?
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>
                :
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
                </div>
                }           
            </div>
        </div>    
    )  
}

export default ProfileStatusWithHooks