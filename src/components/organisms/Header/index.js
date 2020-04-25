// NotificationPanel Component
// --------------------------------------------------------

import React from 'react';
// import PropTypes from 'prop-types';
import classname from 'classnames';
import { Links } from 'components';
import './styles.scss';

const Header = () => {
  // const [isShow, setIsShow] = useState(true);

  // const toggleNotification = () => setIsShow(!isShow);
  const classNames = classname('o-header', {
    // 'is-show': isShow,
    // 'is-mobile': isMobile
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

          {/* <Button onClick={toggleNotification} className={isMobile ? 'is-mobile' : ''}>
            Got it
          </Button> */}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  // isMobile: PropTypes.bool.isRequired
};

Header.defaultProps = {
  // propsName: ''
};

export default (Header);
