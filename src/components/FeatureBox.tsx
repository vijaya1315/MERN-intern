import type {PropBox} from '../pages/Home'

type FeatureBoxProps = {
  featureBoxProp: PropBox[]
}


const FeatureBox = ( {featureBoxProp} : FeatureBoxProps) => {
    return(
        <div className=" grid-cols-3 grid gap-8 ">
            {featureBoxProp.map(i =>
                <div className='bg-[#18181c] rounded-[10px] p-4 text-center py-10 group'>
                   <div className="bg-[#222228] rounded-[30px] p-3.5 aspect-square w-26 flex m-auto mb-8 group-hover:bg-[linear-gradient(135.66deg,#FF9898_14.73%,#8054FF_86.33%)]">
                         <img src={i.img} alt="image" className='m-auto  w-11'/>
                    </div>
                    <h4 className='text-[20px] font-semibold mb-5'>{i.heading}</h4>
                    <p className="text-[var(--color-muted)] text-[14px] font-normal">{i.parg}</p>
                </div>
            )}
        </div>
    )
}

export default FeatureBox