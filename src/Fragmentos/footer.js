import React from 'react';
import logo from '../icon&svg/bx-menu-alt-left.svg';
import facebook from '../icon&svg/facebook.svg';
import twitter from '../icon&svg/twitter.svg';
import youtube from '../icon&svg/youtube.svg';
import instagram from '../icon&svg/instagram.svg';

function Footer() {
    return(
        <footer>
            <div className='footer-cont'>
                <div className='titulo'>
                    <h1>Ableton</h1>
                </div>
                <div className='registro' id='divPad'>
                    <ul>
                        <li><a href="https://www.google.com">Register Live or Push &gt;</a></li>
                        <li><a href="https://www.google.com">About Ableton &gt;</a></li>
                        <li><a href="https://www.google.com">Jobs &gt;</a></li>
                    </ul>
                    <ul className='ul-redes'>
                        <li><a href="https://www.google.com"><img src={facebook} alt='logo facebook'/></a></li>
                        <li><a href="https://www.google.com"><img src={twitter} alt='logo facebook'/></a></li>
                        <li><a href="https://www.google.com"><img src={youtube} alt='logo facebook'/></a></li>
                        <li><a href="https://www.google.com"><img src={instagram} alt='logo facebook'/></a></li>
                    </ul>
                </div>
                <div className='educacion' id='divPad'>
                    <h3>Education</h3>
                    <ul>
                        <li><a href="https://www.google.com">Offers for students and teachers &gt;</a></li>
                        <li><a href="https://www.google.com">Ableton for the Classroom &gt;</a></li>
                        <li><a href="https://www.google.com">Ableton for Colleges and Universities &gt;</a></li>
                    </ul>
                </div>
                <div className='inicio' id='divPad'>
                    <h3>Sign up to our newsletter</h3>
                    <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                    <form method='post' action='#'>
                        <input type='email' placeholder='Email Address'></input>
                        <button type='submit'>Sign up</button>
                    </form>
                </div>
                <div className='comunidad' id='divPad'>
                    <div className='div-footer'>
                        <h3>Community</h3>
                        <ul>
                            <li><a href="https://www.google.com">Find Ableton User Groups &gt;</a></li>
                            <li><a href="https://www.google.com">Find Certified Training &gt;</a></li>
                            <li><a href="https://www.google.com">Become a Certified Trainer &gt;</a></li>
                        </ul>
                    </div>
                </div>
                <div className='lenguaje' id='divPad'>
                    <div className='div-footer'>
                        <h3>Language and Location</h3>
                        <div>
                            <select name="select">
                                <option value="value1">Value 1</option>
                            </select>
                            <select name="select">
                                <option value="value1">Value 1</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='pie'>
                    <ul>
                        <li><a href="https://www.google.com">Contact Us</a></li>
                        <li><a href="https://www.google.com">Press Resources</a></li>
                        <li><a href="https://www.google.com">Legal Info</a></li>
                        <li><a href="https://www.google.com">Privacy Policy</a></li>
                        <li><a href="https://www.google.com">Cookie Settings</a></li>
                        <li><a href="https://www.google.com">Imprint</a></li>
                    </ul>
                </div>
                <div className='fuente'>
                    <span>Made in Berlin</span>
                    <img src={logo} alt='logo-fuente'/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;