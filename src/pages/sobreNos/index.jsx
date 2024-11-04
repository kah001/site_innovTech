import './index.scss'
import { useState, useEffect } from 'react'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import kah from '../../images/kah.jpg'
import jenni from '../../images/jenni.jpg'
import felps from '../../images/felps.jpg'
import mario from '../../images/mario.jpg'


export default function SobreNos() {
    const imagens = [
        { id: 1, img: jenni },
        { id: 2, img: kah },
        { id: 3, img: felps },
        { id: 4, img: mario }
    ]

    const [slidesPorVez, setSlidesPorVez] = useState(2)

    useEffect(() => {
        function qtdSlides() {
            let tela = window.innerWidth
            if (tela >= 720) {
                setSlidesPorVez(2)
            } else {
                setSlidesPorVez(1)
            }
        }

        qtdSlides()
    }, [slidesPorVez])

    return (
        <div className='pagina-sobre-nos'>
            <Cabecalho />

            <div className='sobre'>
                <div className='titulo'>
                    <h1>Sobre a InnovTech</h1>
                    <hr />
                </div>

                <div className='conteudo'>
                    <p>A nossa empresa possui uma metodologia eficaz no desenvolvimento de plataformas web.</p>
                    <br />
                    <p>Logo após o planejamento, a nossa equipe dá forma ao que foi definido e acompanha todo o projeto até a finalização.</p>
                    <br />
                    <p>Criamos um site moderno, otimizado, responsivo e com uma ótima performance, isso tudo é possível graças aos nossos profissionais que possuem as habilidades técnicas necessárias para isso.</p>
                </div>
            </div>

            <div className='equipe'>
                <div className='titulo'>
                    <h1>Nossa Equipe</h1>
                    <hr />
                </div>

                <Swiper className='carrossel-equipe'
                    slidesPerView={slidesPorVez}
                    pagination={{ clickable: true }}
                    navigation
                    modules={{ Autoplay, Pagination, Navigation }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {imagens.map(item => (
                        <SwiperSlide className='item' key={item.id}>
                            <img src={item.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Rodape />
        </div>
    )
}