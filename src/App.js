import React, { useState, useEffect } from 'react';

import Articles from './components/Articles';
import Header from './components/Header';

import './styles/App.sass';

const App = () => {
  //data variable with all articles
  const [articlesData, setArticlesData] = useState([]);

  //fetching articles data from endpoint link
  useEffect(() => {
    fetch('https://pastebin.pl/view/raw/e1658aa0')
      .then(response => response.json())
      .then(data => {
        setArticlesData(data.posts);
      });
  }, []);

  return (
    <div className='App'>
      <Header />
      <Articles articlesData={articlesData} />
    </div>
  );
};

export default App;
