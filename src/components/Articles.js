import React, { useState, useEffect } from 'react';

import Loader from './Loader';

import '../styles/Articles.sass';

const Articles = ({ articlesData }) => {
  //amount of displayed articles
  const [articlesAmount, setArticlesAmount] = useState(6);

  //add 6 articles whe scrollY is near bottom
  const addArticlesFunction = () => {
    if (
      window.scrollY + window.innerHeight >
      document.body.offsetHeight - 250
    ) {
      setTimeout(() => {
        window.removeEventListener('scroll', addArticlesFunction);
        setArticlesAmount(articlesAmount + 6);
      }, 500);
    }
  };

  //add event listener to watch scrollY position
  useEffect(() => {
    window.addEventListener('scroll', addArticlesFunction);
  }, [articlesAmount]);

  const articles = articlesData
    .filter((article, index) => index < articlesAmount)
    .map((article, index) => (
      <a
        className='article-link'
        href={article.url}
        rel='noreferrer'
        target='_blank'
        key={index}
      >
        <div className='article'>
          <div className='text-container'>
            <h1 className='article-title'>{article.title}</h1>
            <h2 className='article-excerpt'>
              {article.excerpt.slice(0, 100)}...
            </h2>
            <div className='article-arrow'></div>
          </div>
          <div className='article-image-div'>
            <img className='article-image' src={article.thumb} alt='' />
          </div>
        </div>
      </a>
    ));
  return (
    <>
      <div className='articles'>
        <div className='articles-container'>{articles}</div>
        {/* add loader only when wait for the data */}
        {(articlesData.length > articlesAmount || !articlesData.length) && (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Articles;
