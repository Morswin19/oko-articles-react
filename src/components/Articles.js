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
        <img src={article.url} alt='' />
        <div className='text-container'>
          <h1 className='article-title'>{article.title}</h1>
        </div>
      </div>
    </a>
  ));
  return <>{articles}</>;
};

export default Articles;
