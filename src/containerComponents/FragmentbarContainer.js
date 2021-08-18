import React from 'react';
import { connect } from 'react-redux';
import Fragmentbar from '../components/page-holder/Page/Fragment/Fragmentbar';



let mapStateToProps = (store) => {
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