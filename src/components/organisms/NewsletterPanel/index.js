// NewsletterPanel Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Button, H3, Input } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';


const NewsletterPanel = ({
  isMobile, newsTitle, newsContent, isPanelShow, handleHidePanel, isTimeToShow
}) => {
  const classNames = classname('o-newsletter-panel', {
    'is-show': isPanelShow && isTimeToShow,
    'is-mobile': isMobile,
    'is-show-mobile': isPanelShow && isTimeToShow && isMobile
  });

  return (
    <div className={classNames}>
      <div className="newsletter-close-panel" role="presentation" onClick={handleHidePanel}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="newsletter-panel-wrapper">
        <H3 classname="newsletter-title">
          {newsTitle}
        </H3>
        <p className="newsletter-content">
          {newsContent}
        </p>

        <div className="newsletter-form">
          <Input placeholder="Email address" type="email" />
          <Button className="newsletter-button">
            Count me In!
          </Button>
        </div>

      </div>
    </div>
  );
};

NewsletterPanel.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  newsTitle: PropTypes.string,
  newsContent: PropTypes.string,
  isPanelShow: PropTypes.bool,
  handleHidePanel: PropTypes.func,
  isTimeToShow: PropTypes.bool.isRequired
};

NewsletterPanel.defaultProps = {
  newsTitle: '',
  newsContent: '',
  isPanelShow: false,
  handleHidePanel: () => {}
};

export default (NewsletterPanel);
