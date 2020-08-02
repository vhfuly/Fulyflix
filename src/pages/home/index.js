import React, { useState, useEffect } from 'react';
import Carousel from '../../components/Carousel';
import categoryRepository from '../../repositories/categories';
import PageDefault from '../../components/pageDefault';
import BannerMain from '../../components/BannerMain';

function Home() {
  const [initialData, setInicialData] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInicialData(categoriesWithVideos);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (

    <PageDefault paddingAll={0}>
      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
     
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription={initialData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      
      })}
    </PageDefault>
  );
}

export default Home;
