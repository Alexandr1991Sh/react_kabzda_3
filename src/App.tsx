import React from 'react';
import './App.css';
import OnOff from './components/onOff/OnOff';
import {Accordion} from "./components/star/Star";



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
        </div>
    );
}


export default App;
