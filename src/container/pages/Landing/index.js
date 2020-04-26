// Landing Component
// --------------------------------------------------------

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import {
  faComment, faPaintBrush, faBullhorn, faServer, faBoxes, faChartLine
} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import General from 'container/templates/General';

const Landing = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 896);
  const [dataHighlight] = useState([
    {
      title: 'Consult',
      content: `Co-create, design thinking; strengthen infrastructure resist granular.
      Revolution circular, movements or framework social impact low-hanging fruit. 
      Save the world compelling revolutionary progress.`,
      fontAwesome: faComment
    },
    {
      title: 'Design',
      content: `Policymaker collaborates collective impact humanitarian shared value
      vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
      issue outcomes vibrant boots on the ground sustainable.
  `,
      fontAwesome: faPaintBrush
    },
    {
      title: 'Develop',
      content: `Revolutionary circular, movements a or impact framework social impact low-
      hanging. Save the compelling revolutionary inspire progress. Collective
      impacts and challenges for opportunities of thought provoking.`,
      fontAwesome: faBoxes
    },
    {
      title: 'Marketing',
      content: `Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
      replicable, effective altruism youth. Mobilize commitment to overcome
      injustice resilient, uplift social transparent effective.`,
      fontAwesome: faBullhorn
    },
    {
      title: 'Manage',
      content: `Change-makers innovation or shared unit of analysis. Overcome injustice
      outcomes strategize vibrant boots on the ground sustainable. Optimism,
      effective altruism invest optimism corporate social.`,
      fontAwesome: faServer
    },
    {
      title: 'Evolve',
      content: `Activate catalyze and impact contextualize humanitarian. Unit of analysis
      overcome injustice storytelling altruism. Thought leadership mass 
      incarceration. Outcomes big data, fairness, social game-changer.`,
      fontAwesome: faChartLine
    }
  ]);

  useEffect(() => {
    window.onresize = () => {
      setIsMobile(window.innerWidth < 896);
    };
    window.scrollTo(-30, 0);
  }, []);

  return (
    <div>
      <General isMobile={isMobile} dataHighlight={dataHighlight} />
    </div>
  );
};

Landing.propTypes = {
  // propsName: PropTypes.string
};

Landing.defaultProps = {
  // propsName: ''
};

export default (Landing);
