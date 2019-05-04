import React, { ChangeEvent } from 'react';

export interface AddNewToDoProps {
  onNewEntry: (newEntry: string) => void;
}

export interface AddNewToDoState {
  newEntry: string;
}

export default class AddNewToDo extends React.Component<AddNewToDoProps, AddNewToDoState> {
  state = {
    newEntry: '',
  };

  handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newEntry: event.target.value,
    });
  };

  handleAddClick = () => {
    this.props.onNewEntry(this.state.newEntry);
    this.setState({
      newEntry: '',
    });
  };

  render() {
    const { newEntry } = this.state;
    return (
      <div>
        <input type="text" value={newEntry} onChange={this.handleTextChange} />
        <button type="button" onClick={this.handleAddClick}>
          Add
        </button>
      </div>
    );
  }
}
