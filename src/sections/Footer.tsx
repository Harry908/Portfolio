import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-container'>
            <div className='socials'>
                {socialImgs.map((img)=> (
                    <a className='icon' target='_blank' href={img.url} key={img.url} rel="noreferrer">
                        <img src={img.imgPath}/>
                    </a>
                ))}
            </div>

            <div className='flex flex-col justify-center'>
                <p className='text-end sm:text-center'>
                    © {new Date().getFullYear()} Huy Ky. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer