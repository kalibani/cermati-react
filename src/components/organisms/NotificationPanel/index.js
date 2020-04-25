// NotificationPanel Component
// --------------------------------------------------------

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class NotificationPanel extends Component {
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

NotificationPanel.propTypes = {
  propsName: PropTypes.string
};

NotificationPanel.defaultProps = {
  propsName: ''
};

export default (NotificationPanel);
