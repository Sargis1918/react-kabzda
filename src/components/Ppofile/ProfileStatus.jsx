import React from "react";

class ProfileStatus extends React.Component {

  state = {
    
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode:true,
    });
    
  };
  deActivateEditMode = () => {
    this.setState(
      {
        editMode:false,
      },
      
        this.props.updateStatus(this.state.status)
      
    );
  

  };

  onStatusChange = (e) => {
    
    this.setState({
      status: e.currentTarget.value,
    });
  
  };

 componentDidUpdate(prevProps,prevState){
  
  if(prevProps.status !== this.props.status){

    this.setState(
    {
      status: this.props.status
    }
  )}
  
 }
  render() {
   
    return (
      <div className="profile-status-wrapper">
        
        <div className="profile-status" onClick={this.activateEditMode}>
          {this.props.status || "------"}
        </div>
  
        {this.state.editMode && (
          <div className="profile-status-value">
            <input
            ref={this.statusInputRef}
              className="profile-status-value-input "
              autoFocus={true}
              onBlur={this.deActivateEditMode }
              value={this.state.status}
              onChange={this.onStatusChange}
              
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
