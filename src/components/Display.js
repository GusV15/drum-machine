import React from 'react';
import Drum from './Drum';
import styled from 'styled-components';

const DisplayStyled = styled.div`
    width: 330px;
    height: 270px;
    margin-left: 20px;
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;
`

const Display = ({ data, power, text ,setText, volume }) => {
    return (
        <DisplayStyled>
            {data.map(drum => (
                <Drum
                    key={drum.id}
                    keyCode={drum.keyCode}
                    keyTrigger={drum.keyTrigger}
                    id={drum.id}
                    url={drum.url}
                    power= {power}
                    text={text}
                    setText={setText}
                    volume={volume}
                />
            ))}
        </DisplayStyled>
    )
}

export default Display

