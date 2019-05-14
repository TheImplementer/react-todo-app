import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import Header from './Header';
import ToDoList from './ToDoList';

describe('App component', () => {
  let app: ShallowWrapper;
  beforeEach(() => (app = shallow(<App />)));

  it('should include the main container', () => {
    expect(app.find('AppContainer').length).toBe(1);
  });

  it('should display the Header component', () => {
    expect(app.containsMatchingElement(<Header />)).toBeTruthy();
  });

  it('should display the ToDoList component', () => {
    expect(app.containsMatchingElement(<ToDoList />)).toBeTruthy();
  });
});
