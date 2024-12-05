import React from 'react'

const Buttons = ({ButtonText = "Sign In" , hovereffect = 'hover:bg-[#eb8f51]'}) => {
  return (
    <div className={`cursor-pointer w-full text-white text-center py-2 rounded-xl bg-[#F56028] text-lg font-bold ${hovereffect}`}>
      <button>{ButtonText}</button>
    </div>
  )
}

export default Buttons
