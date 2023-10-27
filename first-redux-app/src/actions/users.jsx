import { useState } from "react";
import UserServices from "./../services/userservices"

export const retriveUsers=()=>async(dispatch)=>{
    console.log("retriveUsers function called");

    const ResData = await UserServices.getAll();    
        console.log("ResData:", ResData);      

        return dispatch ({type:"RETRIVE_ALL_USERS",payload:ResData}) 

        // return dispatch ({type:"RETRIVE_ALL_USERS",payload:{"data":"anything"}}) 
} 

export const loginUsers=(uname, pass)=>async(dispatch)=>{
    console.log("retriveUsers function called");
    const ResData = await UserServices.getUserLogin(uname, pass);    
        console.log("ResData:", ResData);      
        return dispatch ({type:"RETRIVE_LOGIN_USERS",payload:ResData}) 

        // return dispatch ({type:"RETRIVE_ALL_USERS",payload:{"data":"anything"}}) 
} 

export const RegisterUsers=(registrationwithrollid)=>async(dispatch)=>{
    console.log("retriveUsers function called");
    const ResData = await UserServices.getUserRegistration(registrationwithrollid);    
        console.log("ResData:", ResData);      
        return dispatch ({type:"REGISTER_USERS",payload:ResData}) 

        // return dispatch ({type:"RETRIVE_ALL_USERS",payload:{"data":"anything"}}) 
} 

export const deleteUsers=(id)=>async(dispatch)=>{
    console.log("retriveUsers function called");
    const ResData = await UserServices.deleteUsersbyid(id);    
        console.log("ResData:", ResData);      
        return dispatch ({type:"REGISTER_USERS",payload:ResData}) 

        // return dispatch ({type:"RETRIVE_ALL_USERS",payload:{"data":"anything"}}) 
} 

export const patchUsers=(id)=>async(dispatch)=>{
    console.log("retriveUsers function called");
    const ResData = await UserServices.patchUsersbyid(id);    
        console.log("ResData:", ResData);      
        return dispatch ({type:"PATCH_USERS",payload:ResData}) 

        // return dispatch ({type:"RETRIVE_ALL_USERS",payload:{"data":"anything"}}) 
} 

export const putUsers=(id,inp)=>async(dispatch)=>{
    console.log("retriveUsers function called");
    const ResData = await UserServices.putUsersbyid(id,inp);    
        console.log("ResData:", ResData);      
        return dispatch ({type:"PUT_USERS",payload:ResData}) 

        // return dispatch ({type:"RETRIVE_ALL_USERS",payload:{"data":"anything"}}) 
} 