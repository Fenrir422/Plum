import React from 'react'

const CHANGE_REVIEW_ACTION_CREATOR = (newReview) => {
    return {type:'CHANGE-REVIEW',
            newReview: newReview
    }
};

export default CHANGE_REVIEW_ACTION_CREATOR;