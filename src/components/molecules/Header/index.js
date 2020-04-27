// NotificationPanel Component
// --------------------------------------------------------

import React from 'react';
import classname from 'classnames';
import { Links } from 'components';
import './styles.scss';

import logo from 'assets/images/y-logo-white.png';


const Header = () => {
  const classNames = classname('m-header');

  return (
    <div className={classNames}>
      <div className="header-logo-wrapper">
        <Links to="/">
          <img className="header-logo" src={logo} alt="logo" />

        </Links>
      </div>
    </div>
  );
};

export default (Header);
