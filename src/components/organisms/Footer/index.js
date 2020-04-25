// Footer Component
// --------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Footer extends Component {
// state = {};
  componentDidMount() {}
  // yourFunction = () => {};

  render() {
    const { propsName } = this.props;

    return (
      <tag>
        Class Component (Stateful Component)
        { propsName}
      </tag>
    );
  }
}

Footer.propTypes = {
  propsName: PropTypes.string
};

Footer.defaultProps = {
  propsName: ''
};

export default (Footer);
