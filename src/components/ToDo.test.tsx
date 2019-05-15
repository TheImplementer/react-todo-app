import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ToDo from './ToDo';
import 'jest-styled-components';

describe('ToDo component', () => {
  it('should display the description', () => {
    const toDo: ReactWrapper = mount(<ToDo description="Test" completed={false} />);
    const description: ReactWrapper = toDo.find('Description');
    expect(description.text()).toBe('Test');
    expect(description).toHaveStyleRule('text-decoration', 'none');
  });

  it('should display the to-do description line-through when completed', () => {
    const toDo: ReactWrapper = mount(<ToDo description="Test" completed={true} />);
    expect(toDo.find('Description')).toHaveStyleRule('text-decoration', 'line-through');
  });
});
