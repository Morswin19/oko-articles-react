import React, { useState, useEffect } from 'react';

import Articles from './components/Articles';
import Header from './components/Header';

import './styles/App.sass';

const App = () => {
  const [articlesData, setArticlesData] = useState([]);
  // const [articlesAmount, setArticlesAmount] = useState(6);
  // const [articlesDataAmount, setArticlesDataAmount] = useState();

  // const addArticlesFunction = () => {
  //   if (window.scrollY + window.innerHeight > document.body.offsetHeight - 50) {
  //     setTimeout(() => {
  //       setArticlesAmount(articlesAmount + 6);
  //       window.removeEventListener('scroll', addArticlesFunction);
  //     }, 200);
  //   }
  // };

  useEffect(() => {
    fetch('https://pastebin.pl/view/raw/e1658aa0')
      .then(response => response.json())
      .then(data => {
        setArticlesData(data.posts);
      });
  }, []);

  console.log();
  return (
    <div className='App'>
      <Header />
      <div className='articles-container'>
        <Articles articlesData={articlesData} />
      </div>
    </div>
  );
};

export default App;