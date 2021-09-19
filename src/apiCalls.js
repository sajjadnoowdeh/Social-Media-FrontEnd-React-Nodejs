import axios from "axios"
export const loignCall = async(userNew,dispatch)=>{
    try {
        dispatch({type:"LOGIN_START"})
        let data = await axios.post("auth/login",userNew)
        console.log(data)
        dispatch({type:"LOGIN_SUCCESS",payload:data.data})
    } catch (error) {
        console.log(error)
        dispatch({type:"LOGIN_ERROR"})
    }

}