// Test Footer Component
// --------------------------------------------------------

import React from 'react';
import Footer from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Footer,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
