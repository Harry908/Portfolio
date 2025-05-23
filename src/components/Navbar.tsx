/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                <a className='logo' href='#hero' style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src='/images/Logo.png' alt='Logo' style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                    Huy Ky
                </a>

                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({link,name}) => (
                            <li key={name} className='group'>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline'/>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href='#contact' className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact ME</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar