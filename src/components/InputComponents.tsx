import type {InputField} from '../components/Home/Contact'

type InputProps = {
    inputFields: InputField[]
}
const InputComponents = ({inputFields}: InputProps) => {
    
    return(
   <>
   {inputFields.map(i => <div key={i.props?.id} className='inputGroup'> 
   { (i.type == "text" || i.type ==  "email") && <input className='bg-[#18181C] rounded-xs placeholder:text-[14px] placeholder:text-[#9E9E9E] h-11 px-2.5 my-1.5' {...i.props}/> }
   { i.type == "textarea" && <textarea className='bg-[#18181C] rounded-xs placeholder:text-[14px] placeholder:text-[#9E9E9E] h-11 px-2.5 my-1.5' {...i.props}></textarea> }
   </div>)}
 
        
   </>
    )
}

export default InputComponents