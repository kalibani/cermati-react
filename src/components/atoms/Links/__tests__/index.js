// Test Links Component
// --------------------------------------------------------

import React from 'react';
import Links from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
Links,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
