import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('should include the main container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.app-container').length).toBe(1);
  });
});
