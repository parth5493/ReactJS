import React, { useState } from 'react';

const Customhook = (intVal, initError) => {
    const [inp, setInp] = useState(intVal);
    const [errors, setErrors] = useState(initError);

    const handleChange = (e) => {
        // console.log("Function Call from Custom Hook");
        // console.log(e.target.name);
        // console.log(e.target.value);
        setInp((inp)=>({...inp, [e.target.name]: e.target.value }))
        if (e.target.value == "") {
            const spanID = [e.target.name] + "Error"
            setErrors({...errors, [spanID]: "This field is required."})
        } else {
            setErrors("")
        }
    }

    const updateData = (data) => {
        setInp(data)
    }
   
    return {handleChange, inp, errors, updateData}
};

export default Customhook;