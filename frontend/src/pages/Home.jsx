import React from 'react'

const Home = () => {
  return (
    <div>
      <p>{import.meta.env.VITE_PRODUCTKEY}</p>
    </div>
  )
}

export default Home
