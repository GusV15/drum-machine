import React from 'react';
import Display from './components/Display';
import Controllers from './components/Controllers';
import styled from 'styled-components';
import data from './drum-machine.json';
import { DrumProvider, useDrum } from '../src/context/drum-context';
import './App.css';


const DrumMachine = styled.div`
  width: 670px;
  height: 325px;
  background: #B3B3B3;
  border: 5px solid #FFA500;
  display: flex;
  align-items: center;
`

export default () => {
  return (<DrumProvider>
    <App></App>
  </DrumProvider>)
}

function App() {

  const { power, bank, setPower, setText, setBank } = useDrum();

  const handlePowerClick = () => {
    setPower(!power);
    setText("");

  }
  const handleBankClick = () => {
    // +!1 == 0 y +!0 = 1
    if (power) {
      setBank(+!bank);
    }
    setText(data[+!bank].title);
  }

  return (
    <DrumMachine>
      <Display
        data={data[bank].info}
      />
      <Controllers
        data={data[bank]}
        handlePowerClick={handlePowerClick}
        handleBankClick={handleBankClick}
      />
    </DrumMachine>
  );
}
