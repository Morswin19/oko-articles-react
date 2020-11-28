import React from 'react';

import '../styles/Header.sass';

const Header = () => {
  return (
    <div className='Header'>
      <div className='header-texts'>
        <h1>Must read.</h1>
        <h2>{`[best news only]`}</h2>
      </div>
    </div>
  );
};

export default Header;
