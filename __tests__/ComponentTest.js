import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import 'react-native';
import React from 'react';
import {App} from '../src/app'

import renderer from 'react-test-renderer';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

it('renders correctly', () => {
  const tree = renderer.create(
    <App />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
