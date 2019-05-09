import React, { useState } from 'react';
import uuid from 'uuid/v4';
import AddNewToDo from './AddNewToDo';
import ToDo from './ToDo';

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
    <div>
      <AddNewToDo onNewEntry={handleNewEntry} />
      {entries.map((entry, idx) => (
        <ToDo description={entry.description} key={entry.id} />
      ))}
    </div>
  );
};

export default ToDoList;
