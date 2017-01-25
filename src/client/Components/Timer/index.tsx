import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TimerDisplay from './timerDisplay';
import TimerControls from './timerControls';
var styles = require('./styles.css');

export default observer(() =>
    <div className={styles.pomodoroTimer}>
        <TimerDisplay />
        <TimerControls />
    </div>
);