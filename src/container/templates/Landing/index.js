/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
// Landing Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';
import {
  NotificationPanel, Hero, Highlight, Footer, NewsletterPanel
} from 'components';

const Landing = ({
  isMobile, dataHighlight, username, currentYear, newsTitle, newsContent, isPanelShow, handleHidePanel, isNotificationShow, handleHideNotification, isTimeToShow
}) => {
  const classNamesTemplate = classname('t-landing');
  return (
    <>
      <div className={classNamesTemplate}>
        <NotificationPanel
          isNotificationShow={isNotificationShow}
          handleHideNotification={handleHideNotification}
          isMobile={isMobile}
        />
        <Hero isMobile={isMobile} username={username} />
        <Highlight dataHighlight={dataHighlight} />
        <Footer content={`© ${currentYear} ${username}. All rights reserved.​`} />
        <NewsletterPanel
          isMobile={isMobile}
          newsTitle={newsTitle}
          newsContent={newsContent}
          isPanelShow={isPanelShow}
          isTimeToShow={isTimeToShow}
          handleHidePanel={handleHidePanel}
        />
      </div>
    </>

  );
};

Landing.propTypes = {
  isNotificationShow: PropTypes.bool.isRequired,
  handleHideNotification: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  dataHighlight: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired,
  newsTitle: PropTypes.string.isRequired,
  newsContent: PropTypes.string.isRequired,
  isPanelShow: PropTypes.bool.isRequired,
  handleHidePanel: PropTypes.func.isRequired,
  isTimeToShow: PropTypes.bool.isRequired
};

Landing.defaultProps = {
  // propsName: ''
};

export default Landing;
