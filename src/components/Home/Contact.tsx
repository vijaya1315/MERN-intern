import InputComponents from '../InputComponents'


export type InputField = {
    label: string,
    type: string,
    props: React.InputHTMLAttributes<HTMLInputElement> 
} | {
    label: string,
    type: string,
    props:React.TextareaHTMLAttributes<HTMLTextAreaElement>
}

const Contact = () => {

    const inputFields: InputField[] = [
        {
            label:"Email",
            type: "email",
            props:{
                placeholder: "Enter your Email",
                id:"email"
            }
        },
          {
            label:"name",
            type:"text",
            props:{
                placeholder: "Enter your Name",
                
                id:"name"
            }
        },
          {
            label:"Message",
            type:"textarea",
            props:{
                placeholder: "Enter your Message",
                id:"name"
            }
            
        }
    ]
    return(
        <>
           <div className="subSection-head w-[40%] pb-8">
                <h2>Get In Touch</h2>
                <p>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.</p>
                <button className='themeButton mt-5 w198'>Get in Touch</button> 
                <InputComponents  inputFields = {inputFields}/>
            </div>
        </>
    )
}

export default Contact