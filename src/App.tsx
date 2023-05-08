import React from 'react';
import './App.css';
import OnOff from './components/onOff/OnOff';
import {Accordion} from "./components/accordion/Accordion";
import {Star} from "./components/Star";



function App() {
    return (
        <div>

            <div>
                <Accordion  titleValue={'MENU'} />
            </div>

        <div>
                <Accordion titleValue={'USERS'} />
            </div>
<OnOff/>
            <Star/>
        </div>
    );
}


export default App;
