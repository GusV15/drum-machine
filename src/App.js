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
  const [volume, setVolume] = useState(0.3);

  const handlePowerClick = () => {
    setPower(!power);
    setText("");

  }
  const handleBankClick = () => {
    // +!1 == 0 y +!0 = 1
    if(power) {
      setBank(+!bank);
    }
    setText(data[+!bank].title);
  }

  return (
    <DrumMachine>
      <Display
        data={data[bank].info}
        power={power}
        text={text}
        setText={setText}
        volume={volume}
        setVolume={setVolume}
      />
      <Controllers
        data={data[bank]}
        power={power}
        bank={bank}
        text={text}
        setText={setText}
        volume={volume}
        setVolume={setVolume}
        handlePowerClick={handlePowerClick}
        handleBankClick={handleBankClick}
      />
    </DrumMachine>
  );
}

export default App;
