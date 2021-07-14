import {ADD_POST_ACTION_CREATOR, UPDATE_NEW_POST_TEXT_ACTION_CREATOR} from '../../../../reducers/commentReducer';
import PageComment from './MyComment'
import {connect} from 'react-redux'
import { reduxForm } from 'redux-form';
import addPageComment from '../../../../actionCreators/addPageComment'


let mapStateToProps = (store) => {
    return {
        login: store.authStore.login
    }
};



export default connect (mapStateToProps, {addPageComment} ) (PageComment);







