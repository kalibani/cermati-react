// Highlight Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import { H1, Card } from 'components';
import classname from 'classnames';

import './styles.scss';

const Highlight = ({ children, dataHighlight }) => {
  const classNames = classname('o-highlight');
  return (
    <div className={classNames}>
      <div className="highlight-header">
        <H1 className="highlight-h1">
          How Can I Help You
        </H1>
        <p className="highlight-paragraf">
          Our work then targeted, best practices outcomes social innovation synergy.
          Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
          program areas scale.
        </p>
      </div>
      <div className="highlight-content">
        <div className="container-fluid">
          <div className="row">
            {
              dataHighlight.map((element, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12" key={index}>
                  <Card title={element.title} content={element.content} fontAwesome={element.fontAwesome} />
                </div>

              ))
            }
          </div>

        </div>
      </div>

      {children}
    </div>

  );
};

Highlight.propTypes = {
  dataHighlight: PropTypes.array.isRequired,
  children: PropTypes.node
};

Highlight.defaultProps = {
  children: ''
};

export default Highlight;
