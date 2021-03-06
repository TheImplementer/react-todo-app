import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
`;
HeaderContainer.displayName = 'HeaderContainer';

const AppTitle = styled.h1``;
AppTitle.displayName = 'AppTitle';

const Header: React.FC = () => (
  <HeaderContainer>
    <AppTitle>ToDo List</AppTitle>
  </HeaderContainer>
);

export default Header;
