import React from 'react';
import Menu from '../../components/menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import BrannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div style={{background:"#141414"}}>
      <Menu />
      <BrannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription='          
        Composição - Samuel Costa
        Produção - William Augusto 
        Arranjo - William Augusto e Cleverson Silva
        Voz - Paulo Zuckini
        Bass - Fernando Rosa
        Drums - Cleverson Silva 
        Guitar - Matheus Barbosa 
        Mix - William Augusto 
        Master - Jadir Izar '
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel

        category={dadosIniciais.categorias[1]}
      />
      <Carousel

        category={dadosIniciais.categorias[2]}
      />

      <Carousel

        category={dadosIniciais.categorias[3]}
      />

      <Carousel

        category={dadosIniciais.categorias[4]}
      />
      <Carousel

        category={dadosIniciais.categorias[5]}
      />

      <Footer/>





    </div>
  );
}

export default Home;
