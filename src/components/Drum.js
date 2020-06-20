import React, { useRef } from 'react';
import styled from 'styled-components';

const DrumStyled = styled.div`
    .drum-pad {
        width: 100px;
        height: 80px;
        margin: 3px;
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
    .drum-pad:active {
        background-color: yellow;
        animation-name: drum;
        animation-duration: 2s:
    }    

    @keyframes drum {
        0% {
            background-color: #808080;
            width: 100px;
            height: 80px;
        }
        50% {
            background-color: yellow;
            width: 10px;
            height: 75px;
        }
        100% {
            background-color: #808080;
            width: 100px;
            height: 80px;
        }
    }
`

const Drum = ({ keyCode, keyTrigger, id, url }) => {

    const drum = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        drum.current.play();
    }

    return (
        <DrumStyled>
            <button id={id} className="drum-pad" onClick={handleClick} >{keyTrigger}</button>
            <audio ref={drum} id={keyCode} src={url}></audio>
        </DrumStyled>
    )
}

export default Drum;
