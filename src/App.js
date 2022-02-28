import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from 'react'
// import React, { Component, createContext } from 'react'

const { Provider, Consumer } = createContext()

const parent = (props) => {
  return (
    <Provider value={1}>
      <App />
    </Provider>
  )
}


function App() {
  const [A, setA] = useState("111")

  return (
    <div className="App">
      <div>{A}</div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Child />
      </header>
    </div>
  );
}

const Child = () => (
  <Consumer>
    {
      value => <div>value : {value}2</div>
    }
  </Consumer>
)

export default parent;
