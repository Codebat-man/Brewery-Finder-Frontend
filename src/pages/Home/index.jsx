import React from 'react'
import Hero from './components/Hero'
import AuthCheck from '../../utils/AuthCheck'
const index = () => {
  return (
    <main>
      <AuthCheck/>
    <Hero/>

    </main>
  )
}

export default index