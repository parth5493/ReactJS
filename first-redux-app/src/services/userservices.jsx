import httpanything from './../http-common'

const getAll = () => {
    console.log("getAll called");
    return httpanything.get("users")
}

const getUserLogin = (username, password) => {
    console.log("getUserLogin called", getUserLogin);
    return httpanything.get(`users?username=${username}&password=${password}`)
}

const getUserRegistration = (registrationwithrollid) => {
    console.log("getUserLogin called", getUserRegistration);
    return httpanything.post("users", registrationwithrollid)
}

const deleteUsersbyid = (id) => {
    console.log("getUserLogin called", deleteUsersbyid);
    return httpanything.delete(`users/${id}`)
}

const patchUsersbyid = (id) => {
    console.log("getUserLogin called", patchUsersbyid);
    return httpanything.patch(`users/${id}`)
}

const putUsersbyid = (id,inp) => {
    console.log("getUserLogin called", putUsersbyid);
    return httpanything.put(`users/${id}`, inp)
}

const UserServices = {
    getAll,
    getUserLogin,
    getUserRegistration,
    deleteUsersbyid,
    patchUsersbyid,
    putUsersbyid    
}

export default UserServices;