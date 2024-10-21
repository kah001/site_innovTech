import './index.scss'
import Cabecalho from '../../components/cabecalho'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function SobreNos() {
    return(
        <div className='pagina-sobre-nos'>
            <Cabecalho />

            <section className='sobre'></section>

            <section className='equipe'></section>
        </div>
    )
}