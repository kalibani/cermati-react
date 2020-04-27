// Test General Component
// --------------------------------------------------------

import React from 'react';
import General from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
General,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
