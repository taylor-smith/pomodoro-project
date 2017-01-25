import React from 'react';
import { observer } from 'mobx-react';
import store from '../../Store';
var styles = require('./styles.css');


export default observer(() =>
    <div className={styles.timerDisplay}>
        <div id={styles.cont} data-time={store.timerValue}>
            <svg id={styles.svg} width="200" height="200" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle
                    r="90"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    strokeDasharray="565.48"
                    strokeDashoffset="0"
                >
                </circle>
                <circle
                    id={styles.bar}
                    r="90"
                    cx="100"
                    cy="100"
                    fill="transparent"
                    strokeDasharray="565.48"
                    strokeDashoffset={((store.totalSeconds - store.timerValue) / store.totalSeconds) * (Math.PI*(180))}
                    transform='rotate(-92, 100, 100)'
                >
                </circle>
            </svg>
        </div>
        
        
        
        
        
        
        <span>{store.timerValue !== 0 ? store.timerValue : ''}</span>
    </div>

);