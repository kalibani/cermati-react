// Test NotificationPanel Component
// --------------------------------------------------------

import React from 'react';
import NotificationPanel from '../../index';
import renderer from 'react-test-renderer';

test('Input is match the snapshot', () => {
const component = renderer.create(
NotificationPanel,
);
let tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
