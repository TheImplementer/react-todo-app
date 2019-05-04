import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import Header from './Header';

describe('App component', () => {
  let app: ShallowWrapper;
  beforeEach(() => (app = shallow(<App />)));

  it('should include the main container', () => {
    expect(app.find('div.app-container').length).toBe(1);
  });

  it('should contain the Header component', () => {
    expect(app.containsMatchingElement(<Header />)).toBeTruthy();
  });
});
