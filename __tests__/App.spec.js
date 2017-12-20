import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

jest.unmock('ScrollView');
jest.mock('../assets/fusioncharts.html', () => {
  const path = require('path');
  const fs = require('fs');

  // Library path respect to project directory
  const fcLibraryPath = path.resolve('./assets/fusioncharts.html');
  return { html: fs.readFileSync(fcLibraryPath, 'utf8') }
});

describe('App', () => {
  it('should render as expected', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
