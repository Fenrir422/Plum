import React from 'react';
import classes from './Fragment.module.css';

function Fragment (props) {
    return (
      <div className={classes.fragment}>
          <div className={classes.fragment_item}>
          <a>{props.book}</a></div>
          <div className={classes.fragment_item}>{props.group}</div>
          <div className={classes.fragment_item}>{props.writer}</div>
          <div className={classes.fragment_item}>{props.date}</div>
          <div className={classes.mg_t_10}>{props.content}</div>
          
      </div>
    );
  }

export default Fragment;
