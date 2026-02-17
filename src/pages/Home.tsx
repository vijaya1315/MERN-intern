import Footer from "../components/Footer"
import Header from "../components/Header"
import SkeletonCardText from "../components/skeleten/SkeletonCardText"

import logo from  '../assets/images/logo.png'

import icon1 from  '../assets/images/features/icon1.png'
import icon2 from  '../assets/images/features/icon2.png'
import icon3 from  '../assets/images/features/icon3.png'
import icon4 from  '../assets/images/features/icon4.png'
import icon5 from  '../assets/images/features/icon5.png'
import icon6 from  '../assets/images/features/icon6.png'

import client1 from  '../assets/images/clients/client1.png'
import client2 from  '../assets/images/clients/client2.png'
import client3 from  '../assets/images/clients/client3.png'
import client4 from  '../assets/images/clients/client4.png'
import client5 from  '../assets/images/clients/client5.png'
import client6 from  '../assets/images/clients/client6.png'

import map from  '../assets/images/map.png'


import subtract from  '../assets/images/subtract.png'




import leftImage from  '../assets/images/leftImage.png'
import FeatureBox from "../components/FeatureBox"
import Contact from "../components/Home/Contact"




export type PropBox = {
         img: string,
        heading: string,
        parg: string
    }
const Home  = () => {

    const featureBoxProp: PropBox[] = [
        {
            img: icon1,
            heading: "Fully Customizable",
            parg: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
        },
        {
            img: icon2,
            heading: "Fully Customizable",
            parg: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
        },
        {
            img: icon3,
            heading: "Fully Customizable",
            parg: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
        },
        {
            img: icon4,
            heading: "Fully Customizable",
            parg: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
        },
        {
            img: icon5,
            heading: "Fully Customizable",
            parg: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
        },
        {
            img: icon6,
            heading: "Fully Customizable",
            parg: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem "
        }
    ]
    
    return (
        <>
      <div className="theme-container">
        <div className="blur_ball"></div>
        <Header />
        <div className="py-10 text-center">
            <h1>Beautiful Landing Page <br/> Design for You</h1>
            <p className="text-[var(--color-muted)]">A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
            <button className='themeButton ms-3.5 mt-5'>Download Template</button> 
        </div>
        </div>

        <section className="rounded-3xl p-6 relative">
              <img src={subtract} alt="image "  className="absolute w-full z-[-1] left-0 max-h-118.5" />
               <div className="theme-container bg-[#131415] p-[30px] rounded-[30px]">
  <div className="grid grid-cols-3 grid-rows-4 gap-8">

    {/* div1 */}
    <div className="row-span-4 bg-[#1c1c22] rounded-2xl p-5">
      <img src={logo} className="grayscale-100 brightness-[0.2] m-auto mb-4 w-[41px]"/>
                <div className="animate-pulse space-y-4 flex gap-3">
                    <div className="h-0.5 bg-[#313139] rounded w-full mb-6"></div>
                </div>
                <div className="flex flex-col gap-[30px]">{Array.from({length: 5}).map((_, i) => <SkeletonCardText  key={i}/>)}</div>
    </div>

    {/* div2 */}
    <div className="row-span-2 bg-[#1c1c22] rounded-2xl p-5">
     
    </div>

    {/* div6 */}
    <div className="col-start-3 row-span-3 row-start-1 bg-[#1c1c22] rounded-2xl p-5">
    3
    </div>

    {/* div7 */}
    <div className="col-start-2 row-span-2 row-start-3 bg-[#1c1c22] rounded-2xl p-5">
      4
    </div>

    {/* div5 */}
    <div className="col-start-3 row-start-4 bg-[#1c1c22] rounded-2xl p-5">
      5
    </div>

  </div></div>
</section>

 <div className="theme-container">

        <section className="featureBox my-14">
            <div className="subSection-head w-[50%] pb-8">
                <h2>Feature Boxes</h2>
                <p>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
            </div>
            <FeatureBox  featureBoxProp = {featureBoxProp}/>
        </section>

        <section className="guid flex items-center justify-center">
            <div>
                <img src={leftImage} alt="images" />
            </div>
             <div className="subSection-head w-[40%] pb-8">
                <h2> We're here to guide and help you at all times</h2>
                <p>A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem </p>
                <button className='themeButton mt-5 w198'>Download</button> 
            </div>
        </section>
         </div>

        <section className="client bg-[#18181C]">
            <div className="theme-container">
                <div className="subSection-head w-[40%] pb-8 m-auto text-center pt-[80px] pb-[40px]">
                    <h2>Companies we Worked With in SInce 2015</h2>
                </div>
                <div className="clientLists flex gap-2 [&>div]:bg-black [&>div]:flex [&>div]:rounded-[10px] [&>div]:h-[90px] [&>div_img]:m-auto [&>div]:min-w-40 justify-around">
                    <div><img src={client1} alt="images" /></div> 
                    <div><img src={client2} alt="images" /></div> 
                    <div><img src={client3} alt="images" /></div> 
                    <div><img src={client4} alt="images" /></div> 
                    <div><img src={client5} alt="images" /></div> 
                    <div><img src={client6} alt="images" /></div> 
                </div>
                <div className="joinTrial themeBg rounded-[40px] flex justify-end items-center my-[60px]">
                    <div className="subSection-head w-[40%] pb-8">
                        <p className="text-white mb-[20px]">Love our Our Tool?</p>
                        <h2>Fell Free to Join our 15 Days Free Trial</h2>
                        
                        <button className='themeButton black ms-3.5 mt-5 '>Download Template</button> 
                    </div>
                    <img src={map} alt="map" />
                   
                </div>
            </div>
        </section>

         <Contact />
       
        <Footer />
       </>
    )
}

export default Home