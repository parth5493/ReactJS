import { RETRIVE_ALL_USERS, RETRIVE_LOGIN_USERS, REGISTER_USERS, DELETE_USERS, PATCH_USERS, PUT_USERS } from '../actions/type'

const initialState = {};
const usersReducer = (users = initialState, action) => {
    const { type, payload } = action; // In type, all name like increment or decrement and in payload, receive initialState value and perform action 
    switch (type) {
        case RETRIVE_ALL_USERS:
            console.log("RETRIVE_ALL_USERS called");
            return { ...payload }
        case RETRIVE_LOGIN_USERS:
            console.log("RETRIVE_LOGIN_USERS called");
            return { ...payload }
        case REGISTER_USERS:
            console.log("REGISTER_USERS called");
            return { ...payload }
        case DELETE_USERS:
            console.log("DELETE_USERS called");
            return { ...payload }
        case PATCH_USERS:
            console.log("PATCH_USERS called");
            return { ...payload }
        case PUT_USERS:
            console.log("PUT_USERS called");
            return { ...payload }
        default:
            return users; // this users is a usersReducer's users
    }
}

export const selectUser = (state) => state.users // This is for access all the updated from usersReducer function
export default usersReducer;