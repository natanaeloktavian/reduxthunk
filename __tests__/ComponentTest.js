import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import 'react-native';
import React from 'react';
import MainComponent from '../src/component/MainComponent'

import renderer from 'react-test-renderer';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

it('renders correctly', () => {
  const tree = renderer.create(
    <MainComponent />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
