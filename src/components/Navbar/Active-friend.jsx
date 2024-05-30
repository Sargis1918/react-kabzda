import React from "react";
 class Friends extends React.Component {
   render(){
  return (
    <div className="friends">
      <div className="friends__column">
        <div className="friends__img">
          <img className="dialog__img" src={this.props.img} alt="" />
        </div>
        <div className="friends__name">{this.props.name}</div>
      </div>
    </div>
  );
};}
const ActiveFriends = (props) => {
  let friendsData = props.friends.friendsData.map((f) => (
    <Friends key={f.id} name={f.name} img={f.img} />
  ));
  return <div>{friendsData}</div>;
};

export default ActiveFriends;
