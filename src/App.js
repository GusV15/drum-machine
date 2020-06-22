import React, { useState } from 'react';
import Display from './components/Display';
import Controllers from './components/Controllers';
import data from './drum-machine.json';
import styled from 'styled-components';
import './App.css';

const DrumMachine = styled.div`
  width: 670px;
  height: 325px;
  background: #B3B3B3;
  border: 5px solid #FFA500;
  display: flex;
  align-items: center;
`

function App() {

  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(0);
  const [text, setText] = useState("");

  const handlePowerClick = () => {
    setPower(!power);
    setText("");

  }
  const handleBankClick = () => {
    // +!1 == 0 y +!0 = 1
    setBank(+!bank);
    setText(data[+!bank].title);
  }

  return (
    <DrumMachine>
      <Display
        data={data[bank].info}
        power={power}
        text={text}
        setText={setText}
      />
      <Controllers
        data={data[bank]}
        power={power}
        text={text}
        handlePowerClick={handlePowerClick}
        handleBankClick={handleBankClick}
      />
    </DrumMachine>
  );
}

export default App;
