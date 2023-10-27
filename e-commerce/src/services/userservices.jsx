import httpanything from './../http-common'

const getAll = () => {
    console.log("getAll called");
    return httpanything.get("users")
}


const UserServices = {
    getAll  
}

export default UserServices;