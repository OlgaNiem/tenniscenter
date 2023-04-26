import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar />
        <h1>Opening hours</h1>
        <h2>Vi har öppet</h2>
        <p>må - fre kl 8:00 - 22:00</p>
        <p>lö-sö kl 9:00-22:00</p>
        <p>I juni och juli kl 9-21</p>
        <h2>Övriga tider enligt överenskommelse</h2>
        <h2>På helgerna kundservice vid bokningarna!</h2>
        <h2>Vi rekommenderar att boka online!</h2>
        <Footer />
    </div>
  )
}

export default index