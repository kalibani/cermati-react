// Header Component
// --------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Header extends Component {
// state = {};
  componentDidMount() {}
  // yourFunction = () => {};

  render() {
    const { propsName } = this.props;

    return (
      <tag>
        Class Component (Stateful Component)
        {propsName}
      </tag>
    );
  }
}

Header.propTypes = {
  propsName: PropTypes.string
};

Header.defaultProps = {
  propsName: ''
};

export default (Header);
