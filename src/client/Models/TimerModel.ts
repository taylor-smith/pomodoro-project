import { observable, computed, action, autorun, extendObservable } from 'mobx';
import store from '../Store';
// import { ITimer } from '../../common/models';

export default class TimerModel<> {
    id: string;
    
    @observable pomodoroLength: number;
    @observable shortBreakLength: number;
    @observable longBreakLength: number;
    @observable millisecondsLeft: number;

    intervalID: number;

    @observable pomodoroTally = 0;

    @observable isTimerRunning = false;
    

    @computed get isComplete() {
        return this.millisecondsLeft <= 0;
    }

    @computed get durationAsDate() {
        return new Date(this.millisecondsLeft);
    }

    @computed get secondsRemaining() {
        return this.durationAsDate.getUTCSeconds();
    }

    @computed get minutesRemaining() {
        return this.durationAsDate.getUTCMinutes();
    }

    @computed get timerDisplay () {
        const minutesDisplay = this.minutesRemaining < 10 ? `0${this.minutesRemaining}` : this.minutesRemaining;
        const secondsDisplay = this.secondsRemaining < 10 ? `0${this.secondsRemaining}` : this.secondsRemaining;
        return `${minutesDisplay}:${secondsDisplay}`
    }

    @action startTimer = (): void => {
        this.isTimerRunning = true;
    }

    @action resetTimer = (): void => {
        this.isTimerRunning = false;
        this.millisecondsLeft = this.pomodoroLength;
    }

    @computed get longBreak() {
        return this.pomodoroTally === 3;
    }

    @computed get shortBreak() {
        return this.pomodoroTally < 3;
    }

    @observable isPomodoro = true;

    constructor(id: string, pomodoroLength: number, shortBreakLength: number, longBreakLength: number) {
        this.id = id;
        this.pomodoroLength = pomodoroLength;
        this.shortBreakLength = shortBreakLength;
        this.longBreakLength = longBreakLength;
        this.millisecondsLeft = pomodoroLength;
        
        autorun(() => {
            if (this.isTimerRunning) {
                this.intervalID = window.setInterval(() => {
                    this.millisecondsLeft -= 1000;
                    if (this.isComplete) {
                        this.isTimerRunning = false;
                        if (this.isPomodoro) {
                            if (this.longBreak) {
                                this.isPomodoro = false;
                                this.pomodoroTally = 0;
                                this.isTimerRunning = true;
                                this.millisecondsLeft = 5000;
                                store.createNewPomodoro();
                                console.log('long break');
                                return;
                            } else {
                                this.isPomodoro = false;
                                this.pomodoroTally++;
                                this.isTimerRunning = true;
                                this.millisecondsLeft = 2000;
                                store.createNewPomodoro();
                                console.log('short break');
                                return;
                            }
                        } else {
                            this.isTimerRunning = false;
                            this.isPomodoro = true;
                            this.millisecondsLeft = 10000;
                            console.log('pomodoro');
                            return;
                        }
                    }
                }, 1000);
            } else if (this.intervalID) {
                window.clearInterval(this.intervalID);
            }
        });
    }
}