import React from 'react';
import classes from './Commentbar.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../common/FormControl/FormControl';


function CommentForm(props) {
    
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.formField} ><Field component={"textarea"} name={"messageText"} 
                                                className={classes.pageCommentTextArea}
                                                

                                                />
                                                
            </div>
            
            <button className={classes.button}>Post</button>
            <div className={classes.copy}>Copy</div>
        </form>
    );
}

const CommentReduxForm = reduxForm ({form:'PageComment'}) (CommentForm)

const PageComment =({login,...props})=>{

    const onSubmit2 = (value)=>{
        props.addPageComment(value,login)
    }


    return(
        <div>
            <CommentReduxForm onSubmit={onSubmit2}/>
        </div>
    )
}
export default PageComment;
// (event)=>onPostChange(event)

// let newText = event.target.value;


{/* <div className="dg gtc">        
    <textarea value={props.newPostText} ref={NewPost} onChange={(event)=>onPostChange(event)} name="textarea" id="" cols="30" rows="10" className="bdrs_5 mt_10 ml_10 dib"></textarea>
            <div>
                <div onClick={onAddPost} className={c.button}>Post</div>

                <div className={c.copy}>Copy</div>
            </div>
        </div>  */}