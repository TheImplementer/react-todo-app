import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ToDo from './ToDo';

describe('ToDo component', () => {
  let toDo: ShallowWrapper;
  beforeEach(() => (toDo = shallow(<ToDo description="Test" />)));

  it('should display the description', () => {
    expect(toDo.find('Description').text()).toBe('Test');
  });
});
