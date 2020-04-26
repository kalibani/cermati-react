// NotificationPanel Component
// --------------------------------------------------------

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Button, Links } from 'components';
import './styles.scss';

const NotificationPanel = ({ isMobile }) => {
  const [isShow, setIsShow] = useState(true);

  const toggleNotification = () => setIsShow(!isShow);
  const classNames = classname('o-notification-panel', {
    'is-show': isShow,
    'is-mobile': isMobile,
    'is-show-mobile': isShow && isMobile
  });

  return (
    <div className={classNames}>
      <div className="container d-flex justify-content-center">
        <div className="notification-panel-wrapper">
          <p>
            By accessing and using this website, you acknowledge that you have read and
            understand our
            {' '}
            <Links to="#">Cookie Policy</Links>
            ,
            {' '}
            <Links to="#">Privacy Policy</Links>
            , and our
            {' '}
            <Links to="#">Terms of Service</Links>
            .
          </p>

          <Button onClick={toggleNotification} className={isMobile ? 'is-mobile' : ''}>
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

NotificationPanel.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

NotificationPanel.defaultProps = {
  // propsName: ''
};

export default (NotificationPanel);
