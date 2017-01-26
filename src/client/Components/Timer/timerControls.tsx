import React from 'react';
import { observer } from 'mobx-react';
import store from '../../Store';
var styles = require('./styles.css');

export default observer(() =>
    <div className={styles.timerButton}>
        {store.timerValue === 0 && <button onClick={store.startTimer}>Start Timer</button>}
    </div>
)