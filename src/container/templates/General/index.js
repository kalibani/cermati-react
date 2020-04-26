/* eslint-disable react/no-unescaped-entities */
// General Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';
import {
  NotificationPanel, Hero, Highlight
} from 'components';

const General = ({ isMobile, dataHighlight }) => {
  const classNamesTemplate = classname('t-general', {
    // 'is-show': isShow,
    // 'is-mobile': isMobile
  });
  return (
    <>
      <div className={classNamesTemplate}>
        <NotificationPanel isMobile={isMobile} />
        <Hero isMobile={isMobile} />
        <Highlight dataHighlight={dataHighlight} />
      </div>
    </>

  );
};

General.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  dataHighlight: PropTypes.array.isRequired
};

General.defaultProps = {
  // propsName: ''
};

export default General;
