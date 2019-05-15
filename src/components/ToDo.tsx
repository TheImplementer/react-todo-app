import React from 'react';
import styled from 'styled-components';

const ToDoContainer = styled.div`
  margin: 0.5rem;
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 1rem;
`;

const Description = styled.div<{ completed: boolean }>`
  text-decoration: ${(props: { completed: boolean }) =>
    props.completed ? 'line-through' : 'none'};
`;
Description.displayName = 'Description';

interface ToDoProps {
  description: string;
  completed: boolean;
}

const ToDo: React.FC<ToDoProps> = props => {
  return (
    <ToDoContainer>
      <Description completed={props.completed}>{props.description}</Description>
    </ToDoContainer>
  );
};

export default ToDo;
