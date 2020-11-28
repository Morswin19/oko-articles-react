import React from 'react';

import '../styles/Articles.sass';

const Articles = ({ articlesData }) => {
  const articles = articlesData.map((article, index) => (
    <a
      href='https://jsonplaceholder.typicode.com/'
      target='_blank'
      className='link'
      key={index}
    >
      <div className='article'>
        <div className='text-container'>
          <h1 className='article-title'>Title nr 1</h1>
          <h2>{article.title}</h2>
          <div className='arrow'></div>
        </div>
        <div className='article-image-div'>
          <img src={article.thumb} alt='' />
        </div>
      </div>
    </a>
  ));
  return <>{articles}</>;
};

export default Articles;
