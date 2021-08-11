import React, { useState } from 'react';
import classes from './Poligon.module.css'




function Reader() {
  let arr =["kek","lol","arbidol"
  ]

  let arr2 =[
    {
      name:"oleg"
    },
    {
      name:"RAPTOR"
    }
  ]
  arr2.forEach((element,i,ar)=>{
    element.index=Math.random()
    console.log(ar)
  });

  

  return (
  <div className={classes.pageWrapper}>
  </div>
  );
}

export default Reader