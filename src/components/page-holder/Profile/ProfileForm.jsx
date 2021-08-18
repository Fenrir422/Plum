import classes from './Profile.module.css'
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormControl/FormControl';

const ProfileDataForm =(props)=>{
    let skillDescription = props.profileData.lookingForAJob
    const descriptionToggle=()=>{
        skillDescription=!skillDescription
    }

    return(
        <form onSubmit={props.handleSubmit} className={classes.accountSettingsForm}>
            <div className={classes.formItem}> 
                <span className={classes.formItemLabel}>About me:</span> 
                <Field
                    className={classes.accountEditFormTextarea}
                    placeholder={"About me"} 
                    component={Textarea} 
                    name={"aboutMe"}
                />
            </div>

            <div className={classes.formItem}>  
                    <span className={classes.formItemLabel}>Full name:</span>
                    <Field  
                            className={classes.formField}
                            placeholder={"fullName"} 
                            component={Input} 
                            name={"fullName"}
                    />
            </div>

            <div className={classes.formItem}> 
                <span className={classes.formItemLabel}>Looking for a job:</span>  
                <Field  className={classes.formFieldCheckBox}
                        type={"checkbox"} 
                        component={'input'} 
                        name={"lookingForAJob"}  
                        onClick={()=>descriptionToggle()}

                    />
            </div>
            {skillDescription ? 
                <div className={classes.formItem}>   
                            <span className={classes.formItemLabel}>My skills:</span>
                            <Field  className={classes.formField}
                                    placeholder={"My skils"} 
                                    component={Input} 
                                    name={"lookingForAJobDescription"}
                            /> 
                </div>
            :null}
            
            {/* <div>
                <b>Contacts:</b> {Object.keys(props.profileData.contacts).map(key=>{
                return <div key={key}><b>{key}:<Field placeholder={key} component={Input}  name={"contacts."+ key} /></b></div>})}
            </div> */}
            <button>save</button>
            {/* <div className={classes.logicWrapper}>{props.error && <div className={classes.formError}>{props.error +' '+ 'or Password'}</div>}</div>    */}
        </form>
    )
}
const ProfileDataReduxForm = reduxForm ({form:'profileForm'}) (ProfileDataForm)

export default ProfileDataReduxForm;