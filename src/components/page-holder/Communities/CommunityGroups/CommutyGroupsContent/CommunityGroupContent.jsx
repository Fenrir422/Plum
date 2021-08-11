import React from 'react';
import classes from '../CommunityGroup.module.css'


function CommunityGroupContent ({props,...p}) {

    const id = props.match.params.id;
    const selectedGroup = props.CommunityGroup.find(g=>g.id === id)


    const getRandomInt =(min, max)=>{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
        
    const communityMembersWithGroupIndex = props.communityMembers
          
        
    communityMembersWithGroupIndex.forEach((e)=>{
        e.groupIndex=getRandomInt(1, 100);
    }) 
    
    console.log(communityMembersWithGroupIndex, 'lolol')

    const opa=()=>{
        console.log(communityMembersWithGroupIndex.groupIndex, 'afwawfwfafawffaw')
    }
    opa()

    return (
        <div>
            <div>{selectedGroup.GroupName}</div>
            <div className={classes.unitContainer}></div>
        </div>
    )
}


export default CommunityGroupContent;