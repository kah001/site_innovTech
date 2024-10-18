import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <div className='comp-cabecalho'>
            <img src="/assets/images/innovTech.png" alt="" />

            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <a><Link to='/'>INÍCIO</Link></a>
                <a><Link to='/sobre'>SOBRE NÓS</Link></a>
                <a><Link to='/areas'>ÁREAS DE ATUAÇÃO</Link></a>
            </nav>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`menu ${isOpen ? 'toggle' : ''}`}></div>
            </div>
        </div>
    )
}