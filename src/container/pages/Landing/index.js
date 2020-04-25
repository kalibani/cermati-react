// Landing Component
// --------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Landing extends Component {
// state = {};
  componentDidMount() {}
  // yourFunction = () => {};

  render() {
    const { propsName } = this.props;

    return (
      <div>
        Hai
        {' '}
        {propsName}
      </div>
    );
  }
}

Landing.propTypes = {
  propsName: PropTypes.string
};

Landing.defaultProps = {
  propsName: ''
};

export default (Landing);
