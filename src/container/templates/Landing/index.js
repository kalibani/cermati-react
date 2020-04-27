/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
// Landing Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';
import {
  NotificationPanel, Hero, Highlight, Footer
} from 'components';

const Landing = ({
  isMobile, dataHighlight, username, currentYear
}) => {
  const classNamesTemplate = classname('t-landing', {
    // 'is-show': isShow,
    // 'is-mobile': isMobile
  });
  return (
    <>
      <div className={classNamesTemplate}>
        <NotificationPanel isMobile={isMobile} />
        <Hero isMobile={isMobile} username={username} />
        <Highlight dataHighlight={dataHighlight} />
        <Footer content={`© ${currentYear} ${username}. All rights reserved.​`} />
      </div>
    </>

  );
};

Landing.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  dataHighlight: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired
};

Landing.defaultProps = {
  // propsName: ''
};

export default Landing;
