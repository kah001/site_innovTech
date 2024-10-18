import './index.scss'
import { Link } from 'react-router-dom'

export default function Rodape() {
    return (
        <div className='comp-rodape'>
            <div className='rodape'>
                <div className='info'>
                    <img src="/assets/images/innovTech.png" alt="" />
                </div>

                <div className='paginas'>
                    <a><Link to='/'>INÍCIO</Link></a>
                    <a><Link to='/sobre'>SOBRE NÓS</Link></a>
                    <a><Link to='/areas'>ÁREAS DE ATUAÇÃO</Link></a>
                </div>

                <div className='contato'>

                    <div className='telefone'>
                        <img src="/assets/images/whatsapp.png" alt="" />
                        <p>(11) 12345-6789</p>
                    </div>

                    <div className='email'>
                        <img src="/assets/images/email.png" alt="" />
                        <p>contato@innovtech.com.br</p>
                    </div>

                </div>

            </div>

            <div className='final'>
                <hr />
                <p>&copy; 2024</p>
            </div>
        </div>
    )
}