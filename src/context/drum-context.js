import React, { useState, useMemo } from 'react';

const DrumContext = React.createContext();

export const DrumProvider = (props) => {
    const [power, setPower] = useState(true);
    const [bank, setBank] = useState(0);
    const [text, setText] = useState("");
    const [volume, setVolume] = useState(0.3);

    // useMemo se utiliza para crear un objeto con los datos que necesitamos, 
    // y estos datos React los actualizara solo si algun miembro del 2do argumento cambia

    const value = useMemo(() => {
        return ({
            power,
            bank,
            text,
            volume,
            setPower,
            setBank,
            setText,
            setVolume
        })
    }, [power, bank, text, volume]);

    return <DrumContext.Provider value= {value} {...props} />
}

export const useDrum  = () => {
    const context = React.useContext(DrumContext);
    if(!context) {
        throw new Error('useDrum debe estar dentro del proveedor DrumContext');
    }
    return context;
}