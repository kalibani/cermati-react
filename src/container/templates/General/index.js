// General Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { NotificationPanel } from 'components';

const General = ({ isMobile }) => (
  <div>
    <NotificationPanel isMobile={isMobile} />
  </div>
);

General.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

General.defaultProps = {
  // propsName: ''
};

export default General;
