import classes from './Profile.module.css'
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormControl/FormControl';
import Loader from '../../common/FormControl/Loader/Loader';

const ProfileDataForm =(props)=>{
    console.log(props.profileData, 'шо за хлам')
    return(
        <form onSubmit={props.handleSubmit}>
            <div>   <Field  className={classes.formField} 
                            placeholder={"About me"} 
                            component={Textarea} 
                            name={"aboutMe"}
                    />
            </div>

            <div>   <Field  className={classes.formField} 
                            placeholder={"fullName"} 
                            component={Input} 
                            name={"fullName"}
                    />
            </div>

            <div className={classes.checkBox}>   
                <Field  type={"checkbox"} 
                        component={'input'} 
                        name={"lookingForAJob"}   
                    />
            </div>

            <div>   <Field  className={classes.formField} 
                            placeholder={"My skils"} 
                            component={Input} 
                            name={"lookingForAJobDescription"}
                    />
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(props.profileData.contacts).map(key=>{
                return <div key={key}><b>{key}:<Field placeholder={key} component={Input}  name={"contacts."+ key} /></b></div>})}
            </div>
            <button>save</button>
            {/* <div className={classes.logicWrapper}>{props.error && <div className={classes.formError}>{props.error +' '+ 'or Password'}</div>}</div>    */}
        </form>
    )
}
const ProfileDataReduxForm = reduxForm ({form:'profileForm'}) (ProfileDataForm)

export default ProfileDataReduxForm;