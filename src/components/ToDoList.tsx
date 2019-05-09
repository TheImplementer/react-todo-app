import React, { useState } from 'react';
import AddNewToDo from './AddNewToDo';
import ToDo from './ToDo';

const ToDoList: React.FC = () => {
  const [entries, setEntries] = useState<string[]>([]);

  function handleNewEntry(newEntry: string) {
    setEntries(currentEntries => currentEntries.concat(newEntry));
  }

  return (
    <div>
      <AddNewToDo onNewEntry={handleNewEntry} />
      {entries.map((entry, idx) => (
        <ToDo description={entry} key={idx} />
      ))}
    </div>
  );
};

export default ToDoList;
