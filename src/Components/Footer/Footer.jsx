import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
function Footer() {
  return (
    <>
        <div className="footer">
            <div className="top-content flex justify-between items-center px-20 py-5 pb-10 bg-slate-800 text-white">
                <div className="box space-y-3">
                    <h1 className='text-5xl font-extrabold'>Code.</h1>
                    <p className='text-slate-400'>A beautiful landing page  <br/> template by Codefest.</p>
                </div>
                <div className="box space-y-3">
                    <h1 className='text-3xl font-extrabold mt-5'>About</h1>
                    <p className='text-slate-400'>We like to do business  <br/> at  Codelander HQ to our  <br/> Client's satisfaction.</p>
                </div>
                <div className="box-contact space-y-3 ">
                    <h1 className='text-3xl font-extrabold mt-16 '>Contact Us</h1>
                    <div className="f-row flex gap-4 ">
                        <FontAwesomeIcon className='text-xl mt-2' icon={faMapLocationDot} />
                        <span className='text-slate-400'>123 Business Centre <br/> London SW1A 1AA</span>
                    </div>
                    <div className="s-row flex gap-4  pb-2">
                        <FontAwesomeIcon className='text-xl' icon={faPhone} />
                        <span className='text-slate-400'>+20 1060088542</span>
                    </div>
                    <div className="t-row flex gap-4 items-center">
                        <FontAwesomeIcon className='text-xl' icon={faEnvelope} />
                        <span className='text-slate-400'>elhadidii624@gmail.com</span>
                    </div>
                </div>
                <div className="box-social">
                    <h1 className='text-3xl font-extrabold mb-7'>Socials</h1>
                    <ul className="icons flex justify-between">
                        <li className='hover:rotate-6 transition-all'><a className='text-2xl hover:text-slate-400' href="https://www.facebook.com/El7aDiiDy/" target={'_blank'}  rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        <li className='hover:rotate-6 transition-all'><a className='text-2xl hover:text-slate-400' href="https://twitter.com/ne_Islamm" target={'_blank'}  rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li className='hover:rotate-6 transition-all'><a className='text-2xl hover:text-slate-400' href="https://www.linkedin.com/in/eslamelhadidy/" target={'_blank'}  rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
            </div>
            <div className='buttom-content py-10 bg-blue-400 text-white font-bold text-center'>
                <p>© 2023 Eslam Elhadidy™. All Rights Reserved.</p>
            </div>
        </div>

    </>
  )
}

export default Footer