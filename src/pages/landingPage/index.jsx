import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'

import './index.scss'

export default function LandingPage() {
    return (
        <div className='pagina-landingpage'>
            <Cabecalho />

            <main>
                <section id='inicio'>
                    <div className='texto'>
                        <h1>InnovTech</h1>
                        <br />
                        <p>A nossa empresa é especializada em desenvolvimento web, design e marketing, com nossas habilidades criamos o seu site de acordo com  suas necessidades. Somos focados em resultados!</p>
                    </div>

                    <img src="/assets/images/inicio.jpg" alt="" />

                </section>


                <section id='sobre'>
                    <h1>SOBRE</h1>
                    <br />
                    <p>A nossa empresa possui uma metodologia eficaz no desenvolvimento de plataformas web, criando assim, um site moderno, otimizado, responsivo e com uma ótima performance, isso tudo é possível, graças aos nossos profissionais que  possuem as habilidades técnicas necessárias para isso.</p>
                </section>

                <section id='vantagens'>
                    <h1>VANTAGENS</h1>
                    <section className='vantagens'>
                        <div className='bloco'>
                            <img src="/assets/images/design.png" alt="" />
                            <h3>DESIGN</h3>
                            <p>Além de habilidades técnicas, a nossa equipe utiliza conceitos de design para criar uma interface que chame a atenção dos seus clientes</p>
                        </div>

                        <div className='bloco'>
                            <img src="/assets/images/seguranca.png" alt="" />
                            <h3>SEGURANÇA</h3>
                            <p>No desenvolvimento de nossos projetos, prezamos acima de tudo pela segurança dos seus dados e dos dados dos seus clientes</p>
                        </div>

                        <div className='bloco'>
                            <img src="/assets/images/responsivo.png" alt="" />
                            <h3>DESIGN RESPONSIVO</h3>
                            <p>Nós da InnovTech, nos certificamos de que os nossos sites sejam desenvolvidos e estejam aptos para o ambiente mobile</p>
                        </div>

                        <div className='bloco'>
                            <img src="/assets/images/ecommerce.png" alt="" />
                            <h3>E-COMMERCE</h3>
                            <p>Implementamos e-commerce dentro do site dos nossos clientes, possibilitando assim que eles possam apresentar sua empresa, produtos e serviços na web e aumentar suas vendas</p>
                        </div>

                        <div className='bloco'>
                            <img src="/assets/images/projeto.png" alt="" />
                            <h3>PROJETO</h3>
                            <p>Além de termos as habilidades para criar uma interface que chame a atenção, prezamos muito pela opinião dos nossos clientes, cada detalhe e sugestão é repassada para ele</p>
                        </div>
                    </section>
                </section>

                <section id='equipe'></section>
            </main>


            <Rodape />
        </div>
    )
}