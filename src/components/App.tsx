import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ToDoList from './ToDoList';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

AppContainer.displayName = 'AppContainer';

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <ToDoList />
    </AppContainer>
  );
};

export default App;
