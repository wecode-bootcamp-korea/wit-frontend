import React from 'react';
import styles from './PageTemplate.scss';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);

const Header =() => (
  <header className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('brand')}>
        <Link to="/"> WE:Interval Train </Link>
      </div>
      <div className={cx('right')}>
      </div>
    </div>
  </header>

);

export default Header;
