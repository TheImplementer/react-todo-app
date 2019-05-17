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
    const addNewToDo = toDoList.find(AddNewToDo);
    addNewToDo.props().onNewEntry('First entry');
    addNewToDo.props().onNewEntry('Second entry');
    expect(
      toDoList.containsAllMatchingElements([
        <ToDo description="First entry" completed={false} />,
        <ToDo description="Second entry" completed={false} />,
      ]),
    ).toBeTruthy();
  });

  it('should mark a to-do as completed when notified', () => {
    const addNewToDo = toDoList.find(AddNewToDo);
    addNewToDo.props().onNewEntry('Test entry');
    const toDo = toDoList.find(ToDo);
    toDo.props().toggleCompleted();
    expect(toDoList.find(ToDo).props().completed).toBeTruthy();
  });
});
