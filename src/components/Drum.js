import React, { useRef } from 'react';
import styled from 'styled-components';

const DrumStyled = styled.div`
    .container-drum {
        width: 100px;
        height: 80px;
        margin: 4px;
    }
    .drum-pad {
        width: 100%;
        height: 100%;
        font-size: 1em;
        font-family: 'Russo One', sans-serif;
        font-weight: 400;
        border-radius: 6px;
        outline: none;
        border: none;
        background-color: #808080;
        cursor: pointer;
        box-shadow: 3px 3px 3px -1px #1C1C1C, 3px 3px 4px 0.5px #979797, 3px 3px 2px 0.5px #A6A6A6;
    }
    .container-drum .drum-pad:active {
        background-color: yellow;
        width: 97%;
        height: 97%;
    }    
`

const Drum = ({ keyCode, keyTrigger, id, url, power, setText, volume }) => {
    const drum = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();
        setText(e.target.id);
        power ? drum.current.play() : console.log('Drum machime off');
        drum.current.volume = volume;
    }

    return (
        <DrumStyled>
            <div className="container-drum">
                <button id={id} className="drum-pad" onClick={handleClick} >{keyTrigger}</button>
            </div>
            <audio ref={drum} id={keyCode} src={url}></audio>
        </DrumStyled>
    )
}

export default Drum;
