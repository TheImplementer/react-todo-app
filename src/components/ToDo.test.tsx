import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import ToDo from './ToDo';
import 'jest-styled-components';

describe('ToDo component', () => {
  it('should display the description', () => {
    const toDo: ReactWrapper = mount(
      <ToDo description="Test" completed={false} toggleCompleted={jest.fn()} />,
    );
    const description: ReactWrapper = toDo.find('Description');
    expect(description.text()).toBe('Test');
    expect(description).toHaveStyleRule('text-decoration', 'none');
  });

  it('should display the to-do description line-through when completed', () => {
    const toDo: ReactWrapper = mount(
      <ToDo description="Test" completed={true} toggleCompleted={jest.fn()} />,
    );
    expect(toDo.find('Description')).toHaveStyleRule('text-decoration', 'line-through');
  });

  it('should toggle the completed state when the checkbox is clicked', () => {
    const toggleCompleted = jest.fn();
    const toDo: ShallowWrapper = shallow(
      <ToDo description="Test" completed={false} toggleCompleted={toggleCompleted} />,
    );
    const toggleCheckbox = toDo.find('input[type="checkbox"]');
    expect(toggleCheckbox.props().checked).toBeFalsy();
    toggleCheckbox.simulate('change', { target: { checked: true } });
    expect(toggleCompleted).toHaveBeenCalledTimes(1);
  });

  it('should mark the checkbox as checked if the todo is completed', () => {
    const toDo: ShallowWrapper = shallow(
      <ToDo description="Test" completed={true} toggleCompleted={jest.fn()} />,
    );
    expect(toDo.find('input[type="checkbox"]').props().checked).toBeTruthy();
  });
});
