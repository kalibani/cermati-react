// General Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { NotificationPanel, Header } from 'components';

const General = ({ isMobile }) => (
  <div>
    <NotificationPanel isMobile={isMobile} />
    <Header />
  </div>
);

General.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

General.defaultProps = {
  // propsName: ''
};

export default General;
