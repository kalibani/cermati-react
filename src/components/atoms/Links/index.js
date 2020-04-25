// Links Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Links = ({ propsName }) => (
  <div>
    Functional Component (Stateless Component)
  </div>
);

Links.propTypes = {
  propsName: PropTypes.string
};

Links.defaultProps = {
  propsName: ''
};

export default Links;
