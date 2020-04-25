// Links Component
// --------------------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Links = ({
  type,
  to,
  target,
  color,
  onClick,
  tabIndex,
  children
}) => {
  const classNames = classname('a-links', {
    color
  });
  return (
    <>
      {type === 'link' && (
        <a
          href={to}
          className={classNames}
          target={target}
          onClick={onClick}
          tabIndex={tabIndex}
        >
          {children}
        </a>
      )}
      {type === 'link-dom' && (
        <Link
          to={to}
          className={classNames}
          target={target}
          onClick={onClick}
          tabIndex={tabIndex}
        >
          {children}
        </Link>
      )}
    </>
  );
};

Links.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
  target: PropTypes.string,
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

Links.defaultProps = {
  type: 'link',
  to: '',
  color: '',
  target: '_self',
  tabIndex: '0',
  onClick: () => {},
  children: ''
};

export default Links;
