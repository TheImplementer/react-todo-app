import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import ToDoList from './ToDoList';
import AddNewToDo from './AddNewToDo';
import ToDo from './ToDo';

describe('ToDoList component', () => {
  let toDoList: ShallowWrapper;
  beforeEach(() => (toDoList = shallow(<ToDoList />)));

  it('should display the AddNewToDo component', () => {
    expect(toDoList.find(AddNewToDo).length).toBe(1);
  });

  it('should display the list of todos', () => {
    expect(toDoList.containsMatchingElement(<ToDo description="First entry" />));
  });
});
