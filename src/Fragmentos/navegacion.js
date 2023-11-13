import React from "react";
import logo from '../icon&svg/bx-menu-alt-left.svg';
import plus from '../icon&svg/bx-plus-medical.svg';
function Navegacion(){
    return (
        <>
            <header>
                <a href="https://www.google.com" className='aLogo'>
                    <img src={logo} alt='Logo' className='imgLogo'></img>
                </a>
            </header>
            <nav>
                <ul className='ul-nav'>
                    <li><a href="https://www.google.com">Live</a></li>
                    <li><a href="https://www.google.com">Push</a></li>
                    <li><a href="https://www.google.com">Note</a></li>
                    <li><a href="https://www.google.com">Link</a></li>
                    <li><a href="https://www.google.com">Shop</a></li>
                    <li><a href="https://www.google.com">Packs</a></li>
                    <li><a href="https://www.google.com">Help</a></li>
                    <li><a href="https://www.google.com">More <img className="imgPlus" alt="imagen que complementa el li" src={plus}/></a></li>
                </ul>
                <div className='divRegistro'>
                    <a href="https://www.google.com">Try Live for free</a>
                    <a href="https://www.google.com">Log in or register</a>
                </div>
            </nav>
        </>
    );
}

export default Navegacion;