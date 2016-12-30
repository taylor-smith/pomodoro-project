import { observable, action, computed, autorun } from 'mobx';

export default class Store {
    
    // timer stuff
    intervalID: number;

    pomodoroLength = 15000;
    shortBreakLength = 5000;
    longBreakLength = 10000;

    @observable pomodoroTally = 0;

    @observable millisecondsLeft: number;

    @observable isTimerRunning = false;

    @computed get isComplete() {
        return this.millisecondsLeft <= 0;
    }

    @computed get durationAsDate() {
        return new Date(this.millisecondsLeft);
    }

    @computed get millisecondsRemaining() {
        return this.durationAsDate.getUTCMilliseconds();
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

    @observable isPomodoro = true;
    @observable isShortBreak = false;
    @observable isLongBreak = false;

    constructor() {
        this.millisecondsLeft = this.pomodoroLength;
        autorun(() => {
            if (this.isTimerRunning) {
                this.intervalID = window.setInterval(() => {
                    this.millisecondsLeft -= 1000;
                    if (this.isComplete) {
                        this.isTimerRunning = false;
                    }
                }, 1000);
            } else if (this.intervalID) {
                window.clearInterval(this.intervalID);
                if (this.isPomodoro) {
                    if (this.pomodoroTally === 3) {
                        this.isPomodoro = false;
                        this.millisecondsLeft = this.longBreakLength;
                        this.pomodoroTally = 0;
                        this.isTimerRunning, this.isLongBreak = true;
                    } else {
                        this.isPomodoro = false;
                        this.millisecondsLeft = this.shortBreakLength;
                        this.pomodoroTally++;
                        this.isTimerRunning, this.isShortBreak = true;
                    }
                } else {
                    this.isLongBreak, this.isShortBreak, this.isTimerRunning = false;
                    this.isPomodoro = true;
                    this.millisecondsLeft = this.pomodoroLength;
                }
            }
        });
    }
}