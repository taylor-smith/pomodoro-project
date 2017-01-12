import React from 'react';
import { observer } from 'mobx-react';
import store from '../../Store';

export default observer(() =>
    <div>
        {store.timerValue === 0 && <button onClick={store.startTimer}>Start Timer</button>}
    </div>
)