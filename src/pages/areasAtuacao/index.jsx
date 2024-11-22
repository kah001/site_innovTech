import './index.scss'
import Cabecalho from '../../components/cabecalho'
import Rodape from '../../components/rodape'

export default function AreasAtuacao() {
    return (
        <div className='pagina-areas-atuacao'>
            <Cabecalho />

            <div className='bloco'>
                <h1>Desenvolvimento Web</h1>
                <p>Criamos sites exclusivos e funcionais, adaptados às necessidades específicas de cada cliente. Desde páginas institucionais até e-commerces robustos, garantimos que seu site tenha uma presença online marcante e de alta performance. Oferecemos soluções de software sob medida para empresas de diferentes segmentos. Nossos desenvolvedores trabalham com as tecnologias mais avançadas para criar plataformas seguras, escaláveis e de fácil usabilidade.</p>
            </div>

            <div className='bloco'>
                <h1>Design e Experiência do Usuário (UI e UX)</h1>
                <p>Nosso equipe é qualificada,cuida de toda a parte do design e trabalha para criar interfaces intuitivas e visualmente atraentes. Priorizamos a experiência do usuário, garantindo que seu site seja não apenas bonito, mas também fácil de usar e navegar.</p>
            </div>

            <div className='bloco'>
                <h1>Manutenção e Suporte Técnico</h1>
                <p>Oferecemos serviços contínuos de manutenção e suporte técnico para garantir que seu site esteja sempre atualizado, seguro e funcionando perfeitamente, minimizando riscos e maximizando a eficiência.</p>
            </div>

            <Rodape />
        </div>
    )
}