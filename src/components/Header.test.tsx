import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  let header: ShallowWrapper;
  beforeEach(() => (header = shallow(<Header />)));

  it('should have a container for the title', () => {
    expect(header.find('HeaderContainer').length).toBe(1);
  });

  it('should display the app title', () => {
    expect(header.find('AppTitle').text()).toBe('ToDo List');
  });
});
