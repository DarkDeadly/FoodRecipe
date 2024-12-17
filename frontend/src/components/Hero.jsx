import React from 'react'
import Buttons from './Button'
const Hero = () => {
  return (
    
    <div className="h-[25rem] w-full  flex ">
    <div className="leftContent h-full w-1/2 heroBg ">
       <div className="bg-black/50 h-full">
       <h1 className=' text-6xl text-center font-bold py-7 px-3 text-white font-serif'>Discover Simple , Delicious And <span>  Fast Recipes ! </span></h1>
       <h1 className=' text-xl text-center font-serif  py-7 px-3 text-white font-thin mb-2'>A recipe is soulless. The essence of the recipe must come from you, the cook.</h1>
       <div className='w-[30%]'>
        <Buttons ButtonText='Check Recipes' rounded='rounded-tl-none rounded-tb-none rounded-tr-none rounded-br-none' bgbutton='bg-gradient-to-r from-[#f54728] to-transparent' hovereffect="hover:bg-[#f54728]" />
       </div>
       </div>
    </div>
    <div className="chefBg h-full w-1/2 "></div>
    </div>
  )
}

export default Hero
