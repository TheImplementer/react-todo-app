import React from 'react';
import AddNewToDo from './AddNewToDo';
import ToDo from './ToDo';

const ToDoList: React.FC = () => {
  return (
    <div>
      <AddNewToDo onNewEntry={() => null} />
      <ToDo description="First entry" />
    </div>
  );
};

export default ToDoList;
