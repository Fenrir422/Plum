import classes from './Profile.module.css'
import React from 'react'




class ProfileStatus extends React.Component {
    
    state={
        editMode:false,
        status:this.props.status
    }
    activateEditMode = () => {
        this.setState ({
            editMode:true,
        })
    }

    deactivateEditMode = () => {
        this.setState ({
            editMode:false,
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange=(st)=>{
        this.setState({
            status:st.currentTarget.value,
        })
        
    }
    
    componentDidUpdate(prevProps, prevState){
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        let status = this.props.status;
        if (!status) {
            status = 'no status'
        }
        return(
            <div>
                {this.state.editMode ?
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                :
                <div>
                    <span onDoubleClick={this.activateEditMode}>{status}</span>
                </div>
                }           
            </div>
        )
    }
}

export default ProfileStatus