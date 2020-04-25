// Hero Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Hero = ({ propsName }) => (
<tag>
  Functional Component (Stateless Component)
</tag>
);

Hero.propTypes = {
propsName: PropTypes.string,
};

Hero.defaultProps = {
propsName: '',
};

export default Hero;
