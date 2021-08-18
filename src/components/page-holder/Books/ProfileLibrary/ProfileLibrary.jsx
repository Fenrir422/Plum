import React from 'react';
import classes from './ProfileLibrary.module.css';




const ProfileLibrary = (props) => {
    return (
      <div >
          <b>My Library</b>
          <div className={classes.profileLibraryWrapper}>
            {props.LibraryItems.map(i=>(
                <div className={classes.libraryItem}>
                        <div className={classes.libraryItemContent}>
                            <div> <img src={i.coverURL}/></div>
                            <span>{i.name}</span>
                            {Math.random()}
                        </div>
                        
                </div>
            ))}
          </div>
      </div>
  );
}


export default ProfileLibrary;