import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button.js'
import Game from './Tic-tac-toe-game/Game.js'
import SortableList from './Sortable-List/list.js'
const colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <Button></Button>
        <div className="flex-center-center">
          <Game/>
        </div>

        <div className="sortable-list-container">
          <SortableList data={colors} />
        </div>
      </div>
    );
  }
}

export default App;
