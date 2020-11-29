import React, { useState, useEffect } from 'react';

import Loader from './Loader';

import '../styles/Articles.sass';

const Articles = ({ articlesData }) => {
  const [articlesAmount, setArticlesAmount] = useState(6);

  const addArticlesFunction = () => {
    if (
      window.scrollY + window.innerHeight >
      document.body.offsetHeight - 250
    ) {
      setTimeout(() => {
        setArticlesAmount(articlesAmount + 6);
        window.removeEventListener('scroll', addArticlesFunction);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addArticlesFunction);
  }, [articlesAmount]);

  const articles = articlesData
    .filter((article, index) => index < articlesAmount)
    .map((article, index) => (
      <a href={article.url} target='_blank' className='link' key={index}>
        <div className='article'>
          <div className='text-container'>
            <h1 className='article-title'>{article.title}</h1>
            <h2>{article.excerpt.slice(0, 100)}...</h2>
            <div className='arrow'></div>
          </div>
          <div className='article-image-div'>
            <img src={article.thumb} alt='' />
          </div>
        </div>
      </a>
    ));
  return (
    <>
      <div className='articles'>{articles}</div>
      {(articlesData.length > articlesAmount || !articlesData.length) && (
        <Loader />
      )}
    </>
  );
};

export default Articles;
