import React, { Component } from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';
import Timer from '../Timer';
import store from '../../Store';

export default observer(() =>
    <div>
        <Timer />
        {store.workingPomodoro &&
            <div>
                <input value={store.workingPomodoro.category} onChange={store.workingPomodoro.setCategory}></input>
                <input value={store.workingPomodoro.project} onChange={store.workingPomodoro.setProject}></input>
                <input value={store.workingPomodoro.task} onChange={store.workingPomodoro.setTask}></input>
            </div>
        }
        {[...store.pomodoroMap.values()].map(pomodoro => 
            <div key={pomodoro.id}>
                <div>{pomodoro.project}</div>
                <div>{moment(pomodoro.startTime).format("LLL")}</div>
                <div>{moment(pomodoro.endTime).format("LLL")}</div>
            </div>
        )}
    </div>
)