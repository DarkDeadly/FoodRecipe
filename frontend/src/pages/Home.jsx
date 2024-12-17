import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
const Home = () => {
  return (
    <div className='FullScreenBg h-screen w-full'>
      <div className=' min-h-full w-full backdrop-blur-2xl'>
        <div className=" p-3 mb-2">
          <Header />
        </div>
        <Hero/>
         <div className="Recipes"></div>
        <div className="trendingRecipes"></div>
      </div>

    </div>
  )
}

export default Home
