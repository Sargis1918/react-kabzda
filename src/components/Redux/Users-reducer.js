import { usersAPI,followAPI,unfollowAPI} from "../../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
let initialState = {
   users: [],
   pageSize: 10,
   totalUserCount: 0,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
};
const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: true };
               }
               return u;
            }),
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return { ...u, followed: false };
               }
               return u;
            }),
         };
      case SET_USERS: {
         return { ...state, users: [...action.users] };
      }
      case SET_CURRENT_PAGE: {
         return { ...state, currentPage: action.currentPage };
      }
      case SET_TOTAL_USERS_COUNT: {
         return { ...state, totalUserCount: action.totalCount };
      }
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching };
      }
      case TOGGLE_IS_FOLLOWING_PROGRESS: {
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter((id) => id !== action.userId),
         };
      }
      default:
         return state;
   }
};
export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
   type: SET_CURRENT_PAGE,
   currentPage,
});
export const setUsersTotalCount = (totalCount) => ({
   type: SET_TOTAL_USERS_COUNT,
   totalCount,
});
export const setFetching = (isFetching) => ({
   type: TOGGLE_IS_FETCHING,
   isFetching,
});
export const toogleFollowingProgress = (isFetching, userId) => {
   return {
      type: TOGGLE_IS_FOLLOWING_PROGRESS,
      isFetching,
      userId,
   };
};
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(setFetching(true));
    usersAPI
      .getUsers(currentPage, pageSize)
      .then((data) => {
        dispatch(setFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
      });
  };
};
export const follow=(userId)=>{
   return(dispatch)=>{
dispatch(toogleFollowingProgress(true, userId));
followAPI.followApi(userId).then((data) => {
  if (data.resultCode == 0) {
   dispatch( followSuccess(userId));
  }
  dispatch(toogleFollowingProgress(false, userId));
});
   }
}
export const unfollow = (userId) => {
  return (dispatch) => {
   dispatch( toogleFollowingProgress(true, userId));
    unfollowAPI.unfollowApi(userId).then(() => {
     dispatch( unfollowSuccess(userId));
      dispatch(toogleFollowingProgress(false, userId));
    });
  };
};
export default usersReducer;
