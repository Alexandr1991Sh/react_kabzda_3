import React, {useState} from 'react';

type PropsType = {
    // on: boolean
}

const OnOff = (props: PropsType) => {

    let [on, setOn]= useState(true)

    const onStyle = {
        border: '1px solid black',
        width: '30px',
        height: '20px',
        display: 'inline-block',
        margin: '0px 0px 0px 300px',
        padding: '2px',
        backgroundColor: on  ? 'green' : 'white'
    }
    const offStyle = {
        border: '1px solid black',
        width: '30px',
        height: '20px',
        display: 'inline-block',
        margin: '10px 10px 0px 10px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <button onClick={()=>{setOn(true)}} style={onStyle}>On</button>
            <button onClick={()=>{setOn(false)}} style={offStyle}>Off</button>
            <div style={indicatorStyle }></div>
        </div>
    );
};

export default OnOff;