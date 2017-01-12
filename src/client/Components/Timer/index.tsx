import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TimerDisplay from './timerDisplay';
import TimerControls from './timerControls';

export default observer(() =>
    <div>
        <TimerDisplay />
        <TimerControls />
    </div>
);