import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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

export interface ToDoProps {
  description: string;
  completed: boolean;
  toggleCompleted: () => void;
  onDelete: () => void;
}

const ToDo: React.FC<ToDoProps> = props => {
  return (
    <ToDoContainer>
      <input type="checkbox" onChange={props.toggleCompleted} checked={props.completed} />
      <Description completed={props.completed}>{props.description}</Description>
      <button type="button" data-testid="delete" onClick={props.onDelete}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </ToDoContainer>
  );
};

export default ToDo;
