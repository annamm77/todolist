import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Me Learning React</h1>
        </header>
        <p className="App-intro">
          To get started, I'm going to write words until I understand what's happening
        </p>
        <form onSubmit={this.addItem}>
            <input placeholder="What's on your mind?"></input>
            <button type="submit">Tell Me</button>
        </form>
      </div>
    );
  }
}

export default App;
