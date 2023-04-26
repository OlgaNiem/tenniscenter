import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div>
         <div >
            <nav className={style.nav}>
                <div>
                    <Image src="/logo2.jpg" alt="Logo" width={60} height={60} />
                </div>
                <ul className={style.navLinks}>
                    <li><Link href="/home">Hem</Link></li>
                    <li><Link href="/openhours">Öppettider</Link></li>
                    <li><Link href="/courses">Kurser</Link></li>
                    <li><Link href="/booking">Bokningar</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar