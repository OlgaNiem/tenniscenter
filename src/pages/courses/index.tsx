import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
        <Navbar />
        <h1>Courses</h1>
        <p>
            Vi erbjuder badmintonkurser för alla under höst- och vårsäsongen. 
            Det går även att komma med mitt i säsongen. Fråga oss mer! Kolla även Arbis utbud.
            Tennisklub Jakobstad, TKJ,  anordnar en tennisskola. Kolla in Arbis erbjudande också!      
            Bordtennisklubben BTK Halex anordnar bordtenniskurser. 
            Mer information och kontaktuppgifter finns på deras Facebook sidan.
        </p>
        <Footer />

    
    </div>
  )
}

export default index