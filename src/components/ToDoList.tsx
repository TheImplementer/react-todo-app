import React from 'react';
import AddNewToDo from './AddNewToDo';
import ToDo from './ToDo';

interface ToDoListProps {}
interface ToDoListState {}

export default class ToDoList extends React.Component<ToDoListProps, ToDoListState> {
  render() {
    return (
      <div>
        <AddNewToDo onNewEntry={() => null} />
        <ToDo description="First entry" />
      </div>
    );
  }
}
