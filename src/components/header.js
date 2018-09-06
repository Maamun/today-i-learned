import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default () => {
  return (
    <header className="c-header">
      <nav className="c-header__nav">
        <div className="c-header__title">
          <span role="img" aria-label="Today">
            🗓️
          </span>
          <span role="img" aria-label="I">
            😄
          </span>
          <span role="img" aria-label="learned">
            ✏️
          </span>{' '}
          #TIL Shoutout to <a className='name' href="https://twitter.com/stefanjudis">Stefan Judis</a> for making it possible.
        </div>
        <Link to={'/tutorial/'} className="c-header__button o-btn">
          Set up your own!
        </Link>
      </nav>
    </header>
  );
};
