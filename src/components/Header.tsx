import { Link } from 'react-router-dom'
import header_logo from '../assets/images/header_logo.png'
const Header = () => {
    return (
        <>
         <header className="text-white flex justify-between items-center pt-4.5">
            <Link to={"/"}><img src={header_logo} /></Link> 
            <div>
                <Link to={"/"} className='text-[#9E9E9E] text-[14px]'>Home </Link> 
                <button className='themeButton ms-3.5'>Download Template</button> 
            </div>
         </header>
        </>
    )
}

export default Header