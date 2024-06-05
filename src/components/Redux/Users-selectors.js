import {createSelector} from "reselect"
export const followingInProgress=(state)=>{
    return state.usersPage.followingInProgress
}
 const usersSelector=(state)=>{
    
    return state.usersPage.users
}
export const users= createSelector(usersSelector,(users)=>{
    return users.filter(u=>true)
})
export const pageSize=(state)=>{
    return state.usersPage.pageSize
}
export const totalUserCount=(state)=>{
    return state.usersPage.totalUserCount
}
export const currentPage=(state)=>{
    return state.usersPage.currentPage
}
export const isFetching=(state)=>{
    return state.usersPage.isFetching
}