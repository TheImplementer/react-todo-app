import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AddNewToDo, { AddNewToDoProps } from './AddNewToDo';

describe('AddNewToDo component', () => {
  let addNewToDo: ShallowWrapper<AddNewToDoProps>;
  const newEntryFn = jest.fn();
  beforeEach(() => (addNewToDo = shallow(<AddNewToDo onNewEntry={newEntryFn} />)));

  it('should display a text input to add a new entry', () => {
    expect(addNewToDo.find('input[type="text"]').length).toBe(1);
  });

  it('should display a button to add a new entry', () => {
    expect(addNewToDo.find('button[type="button"]').length).toBe(1);
    expect(addNewToDo.find('button[type="button"]').text()).toBe('Add');
  });

  it('should notify the addition of a new entry when the add button is pressed', () => {
    const input = addNewToDo.find('input[type="text"]');
    input.simulate('change', { target: { value: 'Test entry' } });
    const addButton = addNewToDo.find('button[type="button"]');
    addButton.simulate('click');
    expect(newEntryFn).toHaveBeenCalledWith('Test entry');
  });

  it('should notify the addition of a new entry when pressing enter in the text input field', () => {
    const input = addNewToDo.find('input[type="text"]');
    input.simulate('change', { target: { value: 'Test entry' } });
    input.simulate('keydown', { key: 'Enter' });
    expect(newEntryFn).toHaveBeenCalledWith('Test entry');
  });
});
