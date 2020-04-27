// Stories NotificationPanel Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import NotificationPanel from './index';
import Notes from './readme.md';

storiesOf('Organisms', module).add('NotificationPanel', () => (
  <NotificationPanel />
), {
  info: { inline: true, header: false, text: Notes }
});
