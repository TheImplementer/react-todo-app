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

  it('should mark a todo entry as completed when notified', () => {
    const addNewToDo = toDoList.find(AddNewToDo);
    addNewToDo.props().onNewEntry('Test entry');
    const toDo = toDoList.find(ToDo);
    toDo.props().toggleCompleted();
    expect(toDoList.find(ToDo).props().completed).toBeTruthy();
  });

  it('should delete a todo entry when notified', () => {
    const addNewToDo = toDoList.find(AddNewToDo);
    addNewToDo.props().onNewEntry('Test entry');
    const toDo = toDoList.find(ToDo);
    expect(toDo.length).toBe(1);
    toDo.props().onDelete();
    expect(toDoList.find(ToDo).length).toBe(0);
  });
});
