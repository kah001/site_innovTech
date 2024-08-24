import './index.scss'

export default function Cabecalho(props) {
    return (
        <div className='comp-cabecalho'>
            <img src="/assets/images/innovTech.png" alt="" />

            <div className='topicos'>
                <a href='#inicio'>INÍCIO</a>
                <a href='#sobre'>SOBRE</a>
                <a href='#vantagens'>VANTAGENS</a>
            </div>
        </div>
    )
}