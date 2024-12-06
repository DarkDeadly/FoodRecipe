import React from 'react'

const Inputs = ({inputValue,handleonchange,textType = "email" , placeText = 'please enter your email' , inputName = 'email'}) => {
  return (
    <div>
      <div className={` py-1 w-full rounded-xl mb-1`}>
            <input type={ textType}
            className='border border-white focus:border-2 text-white outline-none py-1 pl-2 w-full rounded-xl text-lg bg-transparent'
            placeholder={placeText}
            name={inputName}
            onChange={handleonchange}
            value={inputValue}
            />
      </div>
    </div>
  )
}

export default Inputs
