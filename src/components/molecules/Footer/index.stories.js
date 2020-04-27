// Stories Footer Component
// --------------------------------------------------------
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './index';
import Notes from './readme.md';

storiesOf('Organisms', module).add('Footer', () => (
  <Footer />
), {
  info: { inline: true, header: false, text: Notes }
});
