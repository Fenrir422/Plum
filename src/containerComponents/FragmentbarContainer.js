import React from 'react';
import { connect } from 'react-redux';
import Fragmentbar from '../components/page-holder/Page/Fragment/Fragmentbar';



let mapStateToProps = (store) => {
    console.log(store.fragmentsStore.fragment, ' ВИВЕДИСЬ ПЛЕС')
    return {
        fragments: store.fragmentsStore.fragments
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

const FragmentbarContainer = connect (mapStateToProps, mapDispatchToProps) (Fragmentbar);


export default FragmentbarContainer;