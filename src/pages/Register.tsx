import axios from "axios"
import {  useActionState, useState } from "react"

const Register:React.FC = () => {
  type ActionState = string | null;
  type DataField ={
    name: string,
    password: string,
    email: string
  }

  const [data, setData] = useState<DataField>({name: "", password:"", email:""})

  const [error, submitAction, isPending ] = useActionState<ActionState, FormData>( 
    async(prevState, formData) => {
      try {
       const res =  await axios.post('http://localhost:2000/api/register' , {
          name: formData.get('name'),
          password: formData.get('password'),
          email: formData.get('email'),
        })
        console.log(res.status,"res")
        if(res.status == 201){
             res.data.message
        }
      } catch (error) {
        console.log(error)
      }
        return "Somthing went wrong"
  }, null)

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const {name , value} = e.target

      setData(prev => {
      return {...prev , [name] : value}
      })
  }
 
    return (
        <>
          <div className="credentScreen min-h-screen bg-blue-950 flex items-center justify-center">
           <div className=" bg-gray-800 h-96 p-7.5 w-[50%] text-center">
               <h2 className="heading">Register</h2>
              <form action={submitAction}>
                  <input type="text" name="name" value={data.name} onChange={handleData}  placeholder="Enter username" className=" themeInput"/> <br/>
                  <input type="password" name="password" value={data.password} onChange={handleData} placeholder="Enter password" className="themeInput"/> <br />
                  <input type="email" name="email" value={data.email} onChange={handleData} placeholder="Enter enail" className="themeInput"/>
                  <button className="themeButton">Submit</button>
              </form>
                  
            </div> 
          </div>

        {isPending  && <div className="modal fixed bg-amber-300 z-999 top-0">
            Loading....
          </div>}
        </>
    )
}

export default Register