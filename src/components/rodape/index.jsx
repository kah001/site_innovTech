import './index.scss'
import { Link } from 'react-router-dom'

export default function Rodape() {
    return (
        <div className='comp-rodape'>
            <div className='conteudo'>
                <div className='logo'>
                    <img src="/assets/images/innovTech.png" alt="" />
                </div>

                <div className='paginas'>
                    <h1>PÁGINAS</h1>
                    <hr />

                    <h2><Link className='no-link' to='/'>INÍCIO</Link></h2>
                    <h2><Link className='no-link' to='/sobre'>SOBRE NÓS</Link></h2>
                    <h2><Link className='no-link' to='/areas'>ÁREAS DE ATUAÇÃO</Link></h2>
                </div>

                <div className='contato'>
                    <h1>CONTATO</h1>
                    <hr />

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

            <hr />
            <p>&copy; 2024 | Todos os direitos reservados</p>
        </div>
    )
}