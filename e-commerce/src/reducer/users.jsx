import { RETRIVE_ALL_USERS} from '../actions/type'

const initialState = {};
const usersReducer = (users = initialState, action) => {
    const { type, payload } = action; // In type, all name like increment or decrement and in payload, receive initialState value and perform action 
    switch (type) {
        case RETRIVE_ALL_USERS:
            console.log("RETRIVE_ALL_USERS called");
            return { ...payload }
        default:
            return users; // this users is a usersReducer's users
    }
}

export const selectUser = (state) => state.users // This is for access all the updated from usersReducer function
export default usersReducer;