//src/App.js

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Flex, Page, Box, BoxStyle } from './design_system/layouts/Layouts';
import { Type, TextBold, TextSize } from './design_system/type/Type';
import { Modal } from './design_system/Portal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Build a design system with React</h1>
        </header>
        <button onClick={this.toggleModal.bind(this)}>
          Show Alert
        </button>
        {
          this.state.showModal &&
          <Modal
            root={document.getElementById("modal-root")}
            header="Test Modal"
            closeModal={this.toggleModal.bind(this)}
          > Test Rendering
          </Modal>
        }
        <Page>
          <Flex lastElRight={true}>
            <Box boxStyle={BoxStyle.doubleSpace} >
              A simple flexbox
            </Box>
            <Box boxStyle={BoxStyle.doubleSpace} >Middle</Box>
            <Box fullWidth={false}>and this goes to the right</Box>
          </Flex>
        </Page>
      </div>
    );
  }
}

export default App;
