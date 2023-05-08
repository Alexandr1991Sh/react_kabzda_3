import React, {useState} from "react";


type AccordionPropsType = {
    titleValue: string
}

export const Accordion = (props: AccordionPropsType) => {

    let [on, setOn] = useState(true)

    const styleBtn = {
        border: '1px solid black',
        width: '70px',
        height: '30px',
        display: 'inline-block',
        margin: '10px 100px 0px 300px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
        borderRadius: '30px'
    }



    const onClickHandler = () => {
        setOn(!on)
    }
    return (
        <div>
            {!on && (<button style={styleBtn} onClick={onClickHandler}><AccordionTitle titleValue={props.titleValue}/></button>)}
            {on && (<button style={styleBtn} onClick={onClickHandler}><AccordionTitle titleValue={props.titleValue}/></button>)}
            {on && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    titleValue: string
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <div>
            {<b>{props.titleValue}</b>}
        </div>
    )
}


export const AccordionBody = () => {
    const styleUl = {
        margin: '10px 100px 0px 300px'
    }
    return (
        <div>
            <ul style={styleUl}>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
