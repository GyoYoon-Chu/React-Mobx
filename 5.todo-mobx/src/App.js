import { Container, Box } from '@material-ui/core';
import React, { Component } from 'react';
import TodoListContainer from './containers/TodoListContainer';
import TodoEditFormContainer from './containers/TodoEditFormContainer';
import SearchbarContainer from './containers/SearchbarContainer';
class App extends Component {
  render() {
    return (
      <Container>
        <Box m={3}><TodoEditFormContainer /></Box>
        <Box m={3}>
          <SearchbarContainer />
          <TodoListContainer />
        </Box>
      </Container>
    );
  }
}

export default App;
