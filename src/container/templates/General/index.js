// General Component
// --------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class General extends Component {
// state = {};
  componentDidMount() {}
  // yourFunction = () => {};

  render() {
    const { propsName } = this.props;

    return (
      <tag>
        Class Component (Stateful Component)
        {' '}
        {propsName}
      </tag>
    );
  }
}

General.propTypes = {
  propsName: PropTypes.string
};

General.defaultProps = {
  propsName: ''
};

export default (General);
