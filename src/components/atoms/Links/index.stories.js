// Stories Links Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Links from './index';
import Notes from './readme.md';

storiesOf('Atoms', module).add('Links', () => (
  <Links />
), {
  info: { inline: true, header: false, text: Notes }
});
