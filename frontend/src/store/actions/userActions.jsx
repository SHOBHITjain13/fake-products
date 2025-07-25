import { Navigate } from "react-router-dom"
import axios from "../../api/axiosconfig"
import { loaduser, removeuser } from "../reducers/userSlice"



export const asynccurrentuser = () => async(dispatch, getState) => {
    try{
     const user = JSON.parse(localStorage.getItem("user"))
     if(user) dispatch(loaduser(user))
    }catch (error) { 
        console.log(error)
}
}

export const asynclogoutuser = () => async(dispatch, getState) => {
    try{
     localStorage.removeItem("user")
     dispatch(removeuser())
    }catch (error) { 
        console.log(error)
}
}

export const asyncloginuser = (user) => async(dispatch, getState) => {
    try{
         const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
        console.log(data[0])
        localStorage.setItem("user", JSON.stringify(data[0]))
        dispatch(asynccurrentuser())
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

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
    try{
     const {data} = await axios.patch("/users/" +id , user)
         localStorage.setItem("user", JSON.stringify(data))
         dispatch(asynccurrentuser())
    }catch (error) { 
        console.log(error)
    }
}


export const asyncdeleteuser = (id) => async(dispatch, getState) => {
    try{
        await axios.delete("/users/" + id)
        dispatch(asynclogoutuser())
    }catch (error) { 
        console.log(error)
}
}