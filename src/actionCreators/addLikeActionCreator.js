
const ADD_LIKE_ACTION_CREATOR = (id) => {
    return {type:'ADD-LIKE-TO-COMMENT',
            commentId: id
    }
};

export default ADD_LIKE_ACTION_CREATOR;