import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login: React.FC  = () => {


    const navigate = useNavigate()

    type userDetails = {
        name: string,
        password: string,
        email:string
    }
    const [userDetails, setUserDetails] = useState<userDetails>({name:"", password:"", email:""})

// e: React.ChangeEvent<HTMLInputElement> for inputelemt e

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUserDetails((prev) => ({
            ...prev, [name]: value
        }))
    }
    const handleSubmit:React.SubmitEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const loginUser = async() => {

            try {
               const res =  await axios.post('http://localhost:2000/api/login' , {
                    name: userDetails.name,
                    password: userDetails.password,
                    email: userDetails.email
                })
                if(res.data.type == 1){
                    console.log("kjhsgdfuh");
                    sessionStorage.setItem("token", res.data.type)
                    navigate("/profile")
                }
            } catch (error) {
                console.log(error)   
            }
        }
        loginUser()
    }

    return(
    <>
    <form onSubmit={e => handleSubmit(e)}>
            <input type="text" name="name" placeholder="Enter the Login" 
            value={userDetails.name} onChange={handleChange} />
        
            <input type="password" name="password" placeholder="Enter your password" 
            value={userDetails.password} onChange={handleChange} />

<input type="email" name="email" id="email" placeholder="enter email" value={userDetails.email}  onChange={handleChange}/>

    <button type="submit" >Login</button>
    </form>
     </>
    )
}

export default Login