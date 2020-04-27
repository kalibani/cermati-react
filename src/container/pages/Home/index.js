/* eslint-disable react/no-this-in-sfc */
// Home Component
// --------------------------------------------------------

import React, { useState, useEffect, useRef } from 'react';
import {
  faComment, faPaintBrush, faBullhorn, faServer, faBoxes, faChartLine
} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';
import Landing from 'container/templates/Landing';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 896);
  const [username] = useState('Kautzar Alibani');
  const [currentYear] = useState(new Date().getFullYear());
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

  const [newsTitle] = useState('Get latest updates in web technologies');
  const [newsContent] = useState(`I write articles related to web technologies, such as design trends, development
  tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
  them all.`);

  const [isNotificationShow, setIsNotificationShow] = useState(true);
  const [isPanelShow, setIsPanelShow] = useState(false);
  const [isTimeToShow, setIsTimeToShow] = useState(true);
  const [count] = useState(0);
  const countRef = useRef(count);
  const handleHideNotification = () => setIsNotificationShow(false);
  const handleShowPanel = (isShow) => {
    setIsPanelShow(isShow);
  };

  const handleHidePanel = () => {
    setIsPanelShow(false);
    setIsTimeToShow(false);
    // showing up again after 10 minutes
    countRef.current = setTimeout(() => {
      setIsPanelShow(false);
      setIsTimeToShow(true);
    }, 600000);
  };

  useEffect(() => {
    window.onresize = () => {
      setIsMobile(window.innerWidth < 896);
    };
    const heightOnShowPanel = isMobile ? (window.innerHeight / 3) : (window.innerHeight / 4);
    window.onscroll = () => {
      if (window.scrollY >= Math.round(heightOnShowPanel) && isTimeToShow) {
        handleShowPanel(true);
      }
    };
  }, [isMobile, isTimeToShow]);

  useEffect(() => () => {
    clearTimeout(countRef.current);
  }, []);


  return (
    <div>
      <Landing
        isNotificationShow={isNotificationShow}
        handleHideNotification={handleHideNotification}
        isMobile={isMobile}
        dataHighlight={dataHighlight}
        username={username}
        currentYear={currentYear}
        newsTitle={newsTitle}
        newsContent={newsContent}
        isPanelShow={isPanelShow}
        isTimeToShow={isTimeToShow}
        handleHidePanel={handleHidePanel}
      />
    </div>
  );
};

export default (Home);
