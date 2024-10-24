import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navegacao from './routes';

//importacoes swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/swiper-bundle.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacao />
  </React.StrictMode>
);

