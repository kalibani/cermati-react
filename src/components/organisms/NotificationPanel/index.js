// NotificationPanel Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Button, Links } from 'components';
import './styles.scss';

const NotificationPanel = ({
  isMobile, isNotificationShow,
  handleHideNotification
}) => {
  const classNames = classname('o-notification-panel', {
    'is-show': isNotificationShow,
    'is-mobile': isMobile,
    'is-show-mobile': isNotificationShow && isMobile
  });

  return (
    <div className={classNames}>
      <div className="container d-flex justify-content-center">
        <div className="notification-panel-wrapper">
          <p className="notification-content">
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

          <Button onClick={handleHideNotification} className={isMobile ? 'is-mobile' : ''}>
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

NotificationPanel.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  isNotificationShow: PropTypes.bool.isRequired,
  handleHideNotification: PropTypes.func
};

NotificationPanel.defaultProps = {
  handleHideNotification: () => {}
};

export default (NotificationPanel);
