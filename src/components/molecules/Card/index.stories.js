// Stories Card Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Card from './index';
import Notes from './readme.md';

storiesOf('Molecules', module).add('Card', () => (
  <Card />
), {
  info: { inline: true, header: false, text: Notes }
});
