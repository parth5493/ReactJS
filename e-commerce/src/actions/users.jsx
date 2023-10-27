import { useState } from "react";
import UserServices from "./../services/userservices"

export const retriveUsers=()=>async(dispatch)=>{
    console.log("retriveUsers function called");

    const ResData = await UserServices.getAll();    
        console.log("ResData:", ResData);      

        return dispatch ({type:"RETRIVE_ALL_USERS",payload:ResData}) 

        // return dispatch ({type:"RETRIVE_ALL_USERS",payload:{"data":"anything"}}) 
} 

