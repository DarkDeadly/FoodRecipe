import React from 'react'

const Buttons = ({handleclick,ButtonText = "Sign In" , hovereffect = 'hover:bg-[#eb8f51]'}) => {
  return (
    <div className={`my-2 cursor-pointer w-full text-white text-center py-2 rounded-xl bg-[#F56028] text-lg font-bold ${hovereffect}`}>
      <button
      onClick={handleclick}
      type='submit'
      >{ButtonText}</button>
    </div>
  )
}

export default Buttons
