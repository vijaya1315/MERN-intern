import axios from "axios"
import {  useState } from "react"

const Register:React.FC = () => {
  type userDetails = {
    name: string, 
    password: string,
    email: string | number | readonly string[] 
  }
  const [userDetails, setUserDetails] = useState<userDetails>({name:"", password:"", email:""})
const [error, setError] = useState<String | null>(null)


    const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault()
           const registerUser = async () => {
              try {
                const res = await axios.post("http://localhost:2000/api/register", {
                  name: userDetails.name,
                  password: userDetails.password,
                  email: userDetails.email
                });
                setError(res.data.message);
              } catch (err) {
                if (err instanceof Error) {
                  setError(err.message);
                } else {
                  setError("Something went wrong");
                }
              }
            };

            registerUser();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
      const {name, value} = e.target;
      setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
    }
    return (
        <>
          <div className="credentScreen min-h-screen bg-blue-950 flex items-center justify-center">
           <div className=" bg-gray-800 h-96 p-7.5 w-[50%] text-center">
               <h2 className="heading">Register</h2>
              <form onSubmit={e => handleSubmit(e)}>
                  <input type="text" name="name" value={userDetails.name} onChange={handleChange} 
                  placeholder="Enter username" className=" themeInput"/> <br/>
                  <input type="password" name="password" placeholder="Enter password" value={userDetails.password} onChange={handleChange} className="themeInput"/> <br />
                  <input type="email" name="email" placeholder="Enter enail" value={userDetails.email} onChange={handleChange} className="themeInput"/>
                  <button className="themeButton">Submit</button>
              </form>
                  
            </div> 
          </div>
          {/* .modal {
    position: fixed;
    top: 40%;
    left: 46%;
    bottom: 0;
    z-index: 9999;
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #808080d4;
} */}
          <div className="modal fixed bg-amber-300 z-999 top-0">
             {error}
          </div>
        </>
    )
}

export default Register