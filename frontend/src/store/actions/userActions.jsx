import axios from "../../api/axiosconfig"
import { loaduser } from "../reducers/userSlice"



export const asynccurrentuser = (user) => async(dispatch, getState) => {
    try{
     const user = JSON.parse(localStorage.getItem("user"))
     if(user) dispatch(loaduser(user))
        else console.log("User not loged in")
    }catch (error) { 
        console.log(error)
}
}

export const asynclogoutuser = (user) => async(dispatch, getState) => {
    try{
     localStorage.removeItem("user")
     console.log("user log-out")
    }catch (error) { 
        console.log(error)
}
}

export const asyncloginuser = (user) => async(dispatch, getState) => {
    try{
         const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        console.log(data[0])
        localStorage.setItem("user", JSON.stringify(data[0]))
    }catch (error) { 
        console.log(error)
}
}


export const asyncregisterusers = (user) => async (dispatch, getState) => {
    try{
        const res = await axios.post("/users", user)
        console.log(res)
    }catch (error) { 
        console.log(error)
    }
}