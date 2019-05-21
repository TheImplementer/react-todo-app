import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import AddNewToDo from './AddNewToDo';
import ToDo from './ToDo';
import styled from 'styled-components';

const ENTRIES_KEY = '@toDoEntries';

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
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const savedEntries = localStorage.getItem(ENTRIES_KEY);
  const parsedEntries = savedEntries !== null ? JSON.parse(savedEntries) : [];
  const [entries, setEntries] = useState<ToDoEntry[]>(parsedEntries);

  useEffect(() => {
    localStorage.setItem(ENTRIES_KEY, JSON.stringify(entries));
  }, [entries]);

  const handleNewEntry = (newEntry: string) => {
    setEntries(currentEntries =>
      currentEntries.concat({
        id: uuid(),
        description: newEntry,
        completed: false,
      }),
    );
  };

  const handleToggleCompleted = (entryId: string) => {
    setEntries(currentEntries =>
      currentEntries.map(entry => {
        if (entry.id !== entryId) {
          return entry;
        }

        return Object.assign({}, entry, {
          completed: entry.completed ? false : true,
        });
      }),
    );
  };

  const handleDeletion = (entryId: string) => {
    setEntries(currentEntries => currentEntries.filter(entry => entry.id !== entryId));
  };

  return (
    <BodyContainer>
      <AddNewToDo onNewEntry={handleNewEntry} />
      <EntriesContainer>
        {entries.map(entry => (
          <ToDo
            description={entry.description}
            completed={entry.completed}
            toggleCompleted={handleToggleCompleted.bind(null, entry.id)}
            onDelete={handleDeletion.bind(null, entry.id)}
            key={entry.id}
          />
        ))}
      </EntriesContainer>
    </BodyContainer>
  );
};

export default ToDoList;
