import React from 'react';
import App from './App.js';
import renderer from 'react-test-renderer';


test('snapshot test of the react dom', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
