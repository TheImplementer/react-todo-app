import React from 'react';
import styled from 'styled-components';

const ToDoContainer = styled.div`
  margin: 0.5rem;
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 1rem;
`;

interface ToDoProps {
  description: string;
}

const ToDo: React.FC<ToDoProps> = props => {
  return <ToDoContainer>{props.description}</ToDoContainer>;
};

export default ToDo;
