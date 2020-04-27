// NotificationPanel Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Footer = ({ content }) => {
  const classNames = classname('m-footer');

  return (
    <div className={classNames}>
      <p className="footer-content">{content}</p>
    </div>
  );
};

Footer.propTypes = {
  content: PropTypes.string
};

Footer.defaultProps = {
  content: 'Footer'
};

export default (Footer);
