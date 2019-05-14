import React, { useState } from 'react';
import uuid from 'uuid/v4';
import AddNewToDo from './AddNewToDo';
import ToDo from './ToDo';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 1rem;
`;

const EntriesContainer = styled.div`
  padding-top: 1rem;
`;

interface ToDoEntry {
  id: string;
  description: string;
}

const ToDoList: React.FC = () => {
  const [entries, setEntries] = useState<ToDoEntry[]>([]);

  function handleNewEntry(newEntry: string) {
    setEntries(currentEntries =>
      currentEntries.concat({
        id: uuid(),
        description: newEntry,
      }),
    );
  }

  return (
    <BodyContainer>
      <AddNewToDo onNewEntry={handleNewEntry} />
      <EntriesContainer>
        {entries.map(entry => (
          <ToDo description={entry.description} key={entry.id} />
        ))}
      </EntriesContainer>
    </BodyContainer>
  );
};

export default ToDoList;
