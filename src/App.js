import React, { useState, useEffect } from 'react';

import Articles from './components/Articles';

import './styles/App.sass';

const App = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [articlesAmount, setArticlesAmount] = useState(6);

  const addArticlesFunction = () => {
    if (window.scrollY + window.innerHeight > document.body.offsetHeight - 50) {
      setTimeout(() => {
        setArticlesAmount(articlesAmount + 6);
        window.removeEventListener('scroll', addArticlesFunction);
      }, 200);
    }
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data =>
        // setArticlesData(
        //   data.posts.filter((item, index) => index < articlesAmount)
        // )
        setArticlesData(
          data.filter((item, index) => index < articlesAmount && index < 100)
        )
      );
    // .catch(err => console.log(err));
  }, [articlesAmount]);

  useEffect(() => {
    window.addEventListener('scroll', addArticlesFunction);
  }, [articlesAmount]);

  return (
    <div className='App'>
      <div className='articles'>
        <Articles articlesData={articlesData} />
      </div>
    </div>
  );
};

export default App;
