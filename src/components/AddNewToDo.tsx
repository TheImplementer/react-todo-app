import React, { ChangeEvent, useState } from 'react';

export interface AddNewToDoProps {
  onNewEntry: (newEntry: string) => void;
}

const AddNewToDo: React.FC<AddNewToDoProps> = (props: AddNewToDoProps) => {
  const [newEntryValue, setNewEntryValue] = useState('');

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEntryValue(e.target.value);
  };

  const handleAddClick = () => {
    props.onNewEntry(newEntryValue);
    setNewEntryValue('');
  };

  return (
    <div>
      <input type="text" value={newEntryValue} onChange={handleTextChange} />
      <button type="button" onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
};

export default AddNewToDo;
