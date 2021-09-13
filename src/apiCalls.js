import axios from "axios"
export const loignCall = async(user,dispatch)=>{
    try {
        dispatch({type:"LOGIN_START"})
        const data = await axios.post("auth/login",user)
        console.log(data)
        dispatch({type:"LOGIN_SUCCESS",payload:data.data})
    } catch (error) {
        console.log(error)
        dispatch({type:"LOGIN_ERROR"})
    }

}