import './index.scss'
import { useState } from 'react'

export default function Cabecalho() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <div className='comp-cabecalho'>
            <img src="/assets/images/innovTech.png" alt="" />

            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <a href='#inicio'>INÍCIO</a>
                <a href='#sobre'>SOBRE</a>
                <a href='#vantagens'>VANTAGENS</a>
                <a href="#equipe">EQUIPE</a>
            </nav>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
            </div>
        </div>
    )
}