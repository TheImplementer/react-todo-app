import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

export interface AddNewToDoProps {
  onNewEntry: (newEntry: string) => void;
}

const AddNewToDo: React.FC<AddNewToDoProps> = (props: AddNewToDoProps) => {
  const [newEntryValue, setNewEntryValue] = useState('');

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewEntryValue(e.target.value);
  };

  const notifyNewEntryAdded = (value: string) => {
    props.onNewEntry(value);
    setNewEntryValue('');
  };

  const handleAddClick = () => notifyNewEntryAdded(newEntryValue);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      notifyNewEntryAdded(newEntryValue);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newEntryValue}
        onChange={handleTextChange}
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
};

export default AddNewToDo;
