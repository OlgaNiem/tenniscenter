import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const openhours = () => {
  return (
    <div>
      <Navbar />
      <h1>Bokningsinstruktioner</h1>
      <ul>
          <li>Ladda ner Playtomic-appen till din telefon från App Store.</li>
          <li>Registrera dig som användare.</li>
          <li>Välj plats för användning (klubb) Pietarsaari Tenniscenter.</li>
          <li>Välj sport från bilden av racketen. Du kan välja tennis, badminton, bordtennis eller squash. 
              Bordtennis hittar du "under" tennis i samma meny!.</li>
          <li>Välj dag, tid och bana (på samma sida när du rullar ner).</li>
          <li>Välj om du betalar för spelet helt själv eller om du delar betalningen med dina vänner. 
              Klicka på "Fortsätt betalning" även om du betalar på klubben!.</li>
          <li>Välj betalsätt. Välj "Betala i klubben" om du vill betala på klubben med kontanter, 
              ePass eller andra sportkuponger eller appar.</li>
          <li>Du kan avboka eller ändra bokningen 12 timmar innan spelet börjar! 
              För senare avbokningar debiterar vi hela priset för speltimmen!.</li>
          <li>I det övre högra hörnet av din Playtomic-profil finns en meny där du kan hitta kontaktinformation och support. 
              Därifrån kan du fråga om problem med Playtomic-appen. 
              Du kan även kontakta vår hall på 0442362897.</li>
        </ul>
      <Footer />
    </div>
  )
}

export default openhours