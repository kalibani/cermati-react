/* eslint-disable react/no-unescaped-entities */
// Hero Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import {
  Header, H1, H2, H4, Button
} from 'components';
import classname from 'classnames';

import './styles.scss';

const Hero = ({ children, isMobile, username }) => {
  const classNames = classname('o-hero', {
    'is-mobile': isMobile
  });
  return (
    <div className={classNames}>
      <div className="hero-header">
        <Header />
      </div>
      <div className="hero-content">
        <H1 className="heading-1">
          Hello! I'm
          {' '}
          {username}
        </H1>
        <H2 className="heading-2">
          Consult, Design, and Develop Websites
        </H2>
        <H4 className="heading-4">
          Have something great in mind? Feel free to contact me.
        </H4>
        <H4 className="heading-4">
          I'll help you to make it happen.
        </H4>
        <Button className="action-button">
          LET'S MAKE CONTACT
        </Button>
      </div>
      {children}
    </div>

  );
};

Hero.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  children: PropTypes.node,
  username: PropTypes.string
};

Hero.defaultProps = {
  children: '',
  username: ''
};

export default Hero;
