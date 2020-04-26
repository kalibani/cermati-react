// NotificationPanel Component
// --------------------------------------------------------

import React from 'react';
// import PropTypes from 'prop-types';
import classname from 'classnames';
import { Links } from 'components';
import './styles.scss';

import logo from 'assets/images/y-logo-white.png';


const Header = () => {
  // const [isShow, setIsShow] = useState(true);

  // const toggleNotification = () => setIsShow(!isShow);
  const classNames = classname('m-header', {
    // 'is-show': isShow,
    // 'is-mobile': isMobile
  });

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

Header.propTypes = {
  // isMobile: PropTypes.bool.isRequired
};

Header.defaultProps = {
  // propsName: ''
};

export default (Header);
