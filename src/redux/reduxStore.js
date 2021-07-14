import commentReducer from "../reducers/commentReducer";
import booksListReducer from "../reducers/booksListReduser";
import booksStoreListReducer from "../reducers/booksStoreListReducer";
import { createStore, combineReducers, applyMiddleware} from "redux";
import fragmentReducer from "../reducers/fragmentReducer";
import friendsListReducer from '../reducers/friendsListReducer'
import communitiesReducer from '../reducers/communitiesReducer'
import authReducer from "../reducers/authReducer";
import thunkMiddleware from 'redux-thunk'
import profileReducer from '../reducers/ProfileReducer'
import {reducer as formReducer} from 'redux-form'
import appReducer from "../reducers/appReducer";

let reducers = combineReducers(
    {
        commentsStore: commentReducer,
        fragmentsStore: fragmentReducer,
        booksStore: booksListReducer,
        booksShopStore: booksStoreListReducer,
        usersStore: friendsListReducer,
        communityStore: communitiesReducer,
        authStore:authReducer,
        profileStore: profileReducer,
        form: formReducer,
        appStore: appReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;