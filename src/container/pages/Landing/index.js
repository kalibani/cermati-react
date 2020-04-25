// Landing Component
// --------------------------------------------------------

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import './styles.scss';
import General from 'container/templates/General';

const Landing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 896);

  useEffect(() => {
    window.onresize = () => {
      setIsMobile(window.innerWidth < 896);
    };
  }, []);

  return (
    <div>
      <General isMobile={isMobile} />
    </div>
  );
};

Landing.propTypes = {
  // propsName: PropTypes.string
};

Landing.defaultProps = {
  // propsName: ''
};

export default (Landing);
