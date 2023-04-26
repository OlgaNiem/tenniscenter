import React from 'react'
import style from '../styles/Home.module.css'
import Image from 'next/image'

const Article = () => {
  return (
    <div>
        <h1>VÄLKOMMEN TILL JAKOBSTADS TENNISCENTER</h1>
        <p>
            Jakobstad Tenniscenter är ett trävligt och avslappnat centrum för olika bollspel. 
            Den trivsamma hallen är idealisk för tennis,  badminton, squash och pingis. 
            Man behöver inte bli medlem att spela hos oss. 
            Vi har butik med utrustning och racket spänningstjänst.  Vi har öppet alla dagar på året!   
        </p>
        <p>
            Vi ordnar kurser. Se länken här. Hos oss företag kan ordna tyky  och tävlingdagarna. 
        </p>

      <div className={style.pictureColumn}>
          
          <div className={style.picture}>
            <Image src="/tennis1.jpeg" alt="tennis" width={850} height={700} />
            <div className={style.caption}>
              <h3>Tennis</h3>
              <p>
                Vi har två tennisbanor.  
                Tennisklub Jakobstad, TKJ, ordnar kurser. Som TKJ medlem man får 2 euro rabat av vanlig pris.
             </p>
            </div>
          </div>

          <div className={style.picture}>
            <Image src="/badminton1.jpg" alt="badminton" width={850} height={700} />
            <div className={style.caption}>
              <h3>Badminton</h3>
              <p>
                Badminton är en trevlig sport som passar alla. 
                Vi erbjuder även 6 banor för spel. Fråga av vår kurser!
              </p>
            </div>
          </div>

          <div className={style.picture}>
            <Image src="/pingpong.jpg" alt="pingis" width={850} height={700} />
            <div className={style.caption}>
              <h3>Pingis</h3>
              <p>
                Pingis är trevlig sport för alla.  Pingis är billigt hos oss. 
                Vi är hemhallen för pingisklubben Halex. 
              </p>
            </div>
          </div>

          <div className={style.picture}>
            <Image src="/squash1.jpg" alt="squash" width={850} height={700} />
            <div className={style.caption}>
              <h3>Squash</h3>
              <p>
                Squash är en fartfylld sport som garanterat får dig att svettas! 
                Vår squashbana är den enda i Jakobstad. Kom och testa denna roliga sport!
              </p>
            </div>
          </div>
        </div>
          
      </div>
  )
}

export default Article