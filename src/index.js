import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navegacao from './routes';

//importacoes do swiper para o carousel
import 'swiper/css'
import 'swiper/css/navigation' //modulos das setas
import 'swiper/css/pagination' //importando as bolinhas
import 'swiper/css/scrollbar'
import 'swiper/swiper-bundle.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacao />
  </React.StrictMode>
);

