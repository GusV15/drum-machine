import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const ControllerSyled = styled.div`
    margin: auto;
    .drum-controllers {
        width: 300px;
        height: 250px;
    }
    h2 {
        font-size: 1em;
        font-weight: 500;
        margin: 0;
        margin-top: 20px;
        text-align: center;
    }
    .select-power {
        position: relative;
        width: 55px;
        height: 25px;
        margin: auto;
        margin-bottom: 15px;
        background-color: black;
    }
    .switch-power {
        position: absolute;
        width: 22px;
        height: 18px;
        background: blue;
        margin-top: 3px;
        margin-left: ${({ power }) => (power ? "30px" : "3px")};
        cursor: pointer;
    }
    .switch-bank {
        position: absolute;
        width: 22px;
        height: 18px;
        background: blue;
        margin-top: 3px;
        margin-left: ${({ bank }) => (bank ? "30px" : "3px")};
        cursor: pointer;
    }
    .drum-display {
        width: 200px;
        height: 50px;
        margin: auto;
        margin-bottom: 15px;
        background: #808080;
        display: flex;
        justify-content: center;
    }
    input {
        -webkit-appearance: none;
        width: 245px;
        height: 2.5px;
        margin-left: 25px;
        background: #424242 !important;
        border: 1px solid black !important;
        box-shadow: 3px 3px 3px -1px #1C1C1C, 3px 3px 3px 0.5px #979797, 3px 3px 2px 0.5px #A6A6A6;
        outline: none;
    }
    input::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px #111, 0 0 1px #1e1e1e;
        border: 0 solid #fff;
        height: 25px;
        width: 10px;
        border-radius: 0;
        background: blue;
        cursor: pointer;
        -webkit-appearance: none;
    }
`
const Controllers = ({ power, bank, handlePowerClick, handleBankClick, text, setText, volume, setVolume }) => {
    const handleChange = (e) => {
        setVolume(e.target.value);
        if(power){
            setText(`Volume: ${Math.round(volume * 100)}`);
            setTimeout(() => {
                setText("");
            }, 1000);
        }
    }

    return (
        <ControllerSyled power={power} bank={bank}>
            <Header />
            <div className="drum-controllers">
                <h2>Power</h2>
                <div className="select-power" onClick={handlePowerClick}>
                    <div className="switch-power"></div>
                </div>
                <div className="drum-display">
                    {text && power ? <p>{text}</p> : <p>{""}</p>}
                </div>
                <div className="drum-input">
                    <input type="range" step="0.01" min="0" max="1" value={volume} onClick={handleChange} onChange={handleChange} disabled={power ? false : true}/>
                </div>
                <h2>Bank</h2>
                <div className="select-power" onClick={handleBankClick}>
                    <div className="switch-bank"></div>
                </div>
            </div>
        </ControllerSyled>
    )
}

export default Controllers;
