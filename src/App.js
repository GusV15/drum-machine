import React from 'react';
import Display from './components/Display';
import data from './drum-machine.json';
import styled from 'styled-components';
import './App.css';

const DrumMachine = styled.div`
  width: 670px;
  height: 325px;
  border: 5px solid #FFA500;
  display: flex;
  align-items: center;

`

function App() {
  return (
    <DrumMachine>
        <Display
          data={data}
        />
    </DrumMachine>
  );
}

export default App;
