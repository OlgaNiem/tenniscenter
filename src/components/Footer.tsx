import React from 'react'
import style from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={style.footer}>
          <div className={style.gridContainer}>
          {
            ['instagram', 'facebook', 'gmail'].map(path =>{
              return(
                <div key={path} className={style.img}>
                  <Image src={`/${path}.svg`}alt='socialMedia' width='35' height='35'/>        
                </div>
              )
            })
          }
          </div>
    
          <div className={style.copyright}>
            Copyright 2023 Olha Niemiets
          </div>
        </div>
      )
}

export default Footer