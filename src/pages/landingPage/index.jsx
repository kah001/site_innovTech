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
                        <p>A nossa empresa é especializada <br /> em desenvolvimento web, design <br /> e marketing, com nossas <br /> habilidades criamos o seu site de <br /> acordo com  suas necessidades. <br /> Somos focados em resultados!</p>
                    </div>

                    <img src="/assets/images/inicio.jpg" alt="" />
 
                </section>

            
                <section id='sobre'>
                    <h1>SOBRE</h1>
                    <br />
                    <p>A nossa empresa possui uma metodologia eficaz no desenvolvimento de plataformas web, criando assim, um site moderno, otimizado, <br /> responsivo e com uma ótima performance, isso tudo é possível, graças aos nossos profissionais que  possuem as habilidades técnicas necessárias para isso.</p>
                </section>

                <section id='vantagens'>

                    <div className='bloco'>
                        <img src="/assets/images/design.png" alt="" />
                        <h3>DESIGN</h3>
                        <p>Além de habilidades técnicas, a <br /> nossa equipe utiliza conceitos de <br /> design para criar uma interface <br /> que chame a atenção dos seus clientes</p>
                    </div>

                    <div className='bloco'>
                        <img src="/assets/images/seguranca.png" alt="" />
                        <h3>SEGURANÇA</h3>
                        <p>No desenvolvimento de nossos <br /> projetos, prezamos acima de tudo <br /> pela segurança dos seus dados e <br /> dos dados dos seus clientes</p>
                    </div>

                    <div className='bloco'>
                        <img src="/assets/images/responsivo.png" alt="" />
                        <h3>DESIGN RESPONSIVO</h3>
                        <p>Nós da InnovTech, nos certificamos <br /> de que os nossos sites sejam <br /> desenvolvidos e estejam aptos <br /> para o ambiente mobile</p>
                    </div>

                    <div className='bloco'>
                        <img src="/assets/images/ecommerce.png" alt="" />
                        <h3>E-COMMERCE</h3>
                        <p>Implementamos e-commerce dentro do site dos nossos clientes, <br /> possibilitando assim que eles possam apresentar sua <br /> empresa, produtos e serviços na web e aumentar suas vendas</p>
                    </div>

                    <div className='bloco'>
                        <img src="/assets/images/projeto.png" alt="" />
                        <h3>PROJETO</h3>
                        <p>Além de termos as habilidades para criar uma interface <br /> que chame a atenção, prezamos muito pela opinião <br /> dos nossos clientes, cada detalhe e sugestão é repassada <br /> para ele</p>
                    </div>
                </section>
            </main>


            <Rodape/>
        </div>
    )
}