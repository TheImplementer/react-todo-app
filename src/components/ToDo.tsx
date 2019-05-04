import React from 'react';

interface ToDoProps {
  description: string;
}

const ToDo: React.FC<ToDoProps> = props => {
  return <div>{props.description}</div>;
};

export default ToDo;
