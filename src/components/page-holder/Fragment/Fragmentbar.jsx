import React from 'react';
import Fragment from './Fragment';
import classes from './Fragment.module.css';

function Fragmentbar(props) {
    let fragmentElement = 
        props.fragment
        .map
            (f => <Fragment book={f.book} writer={f.writer} group={f.group} content={f.content} date={f.date} />);

    return (
        <div className={classes.fragment_bar}>
            {fragmentElement}
        </div>
    );
}

export default Fragmentbar;