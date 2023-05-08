import React, {useState} from 'react';

export const Star = () => {


    let [value, setValue] = useState(3)

    return (
        <div>
            <button onClick={() => {setValue(1)}}><Star1 selected={value > 0}/></button>
            <button onClick={() => {setValue(2)}}><Star1 selected={value > 1}/></button>
            <button onClick={() => {setValue(3)}}><Star1 selected={value > 2}/></button>
            <button onClick={() => {setValue(4)}}><Star1 selected={value > 3}/></button>
        </div>
    );
};


type PropsType = {
    selected: boolean
}
const styleStar1 = {
    color: 'blue'
}

const Star1 = (props: PropsType) => {
    if (props.selected === true) {
        return <span style={styleStar1}><b>Star</b></span>
    } else {
        return <span>Star</span>
    }
}

