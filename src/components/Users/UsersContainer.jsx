import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  followSuccess,
  unfollowSuccess,
  setCurrentPage,
  toogleFollowingProgress,
  getUsers,
} from "../Redux/Users-reducer";
import Preloader from "../../common/Preloader/Preloader";
import Users from "./Users";
import userPhoto from "../../asetts/images/user.png";
import withAuthUseNavigate from "../../hoc/withAuthUseNavigate";
import { compose } from "redux";
import { currentPage, followingInProgress, isFetching, pageSize, totalUserCount, users,  } from "../Redux/Users-selectors";
class UsersAPIComponent extends React.Component {
  componentDidMount() {

    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        <Users
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingInProgress={this.props.followingInProgress}
          toogleFollowingProgress={this.props.toogleFollowingProgress}
          userPhoto={userPhoto}
          preloader={<Preloader />}
          isFetching={this.props.isFetching}
          pageSize={this.props.pageSize}
          totalUserCount={this.props.totalUserCount}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          users={this.props.users}
          followSuccess={this.props.followSuccess}
          unfollowSuccess={this.props.unfollowSuccess}
        />
      </>
    );
  }
}

let mapStateToPropos = (state) => {
  return {
    followingInProgress: followingInProgress(state),
    users: users(state),
    pageSize: pageSize(state),
    totalUserCount: totalUserCount(state),
    currentPage: currentPage(state),
    isFetching: isFetching(state) ,
  };
};
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber));
//     },
//     setUsersTotalCount: (totalCount) => {
//       dispatch(totalUsersCountAC(totalCount));
//     },
//     setFetching: (isFetching) => {
//       dispatch(isFetchingAC(isFetching));
//     },
//   };
// };

export default compose(connect(mapStateToPropos, {
  toogleFollowingProgress,
  followSuccess,
  unfollowSuccess,
  follow,
  unfollow,
  setCurrentPage,

  getUsers,
}),withAuthUseNavigate)(UsersAPIComponent);
