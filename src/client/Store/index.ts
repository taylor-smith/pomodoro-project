import { observable, action, computed, autorun } from 'mobx';

export default class Store {
    
    // Clock stuff
    intervalID: number;

    @observable millisecondsLeft = 1500000

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

    @computed get clockDisplay () {
        const minutesDisplay = this.minutesRemaining < 10 ? `0${this.minutesRemaining}` : this.minutesRemaining;
        const secondsDisplay = this.secondsRemaining < 10 ? `0${this.secondsRemaining}` : this.secondsRemaining;
        return `${minutesDisplay}:${secondsDisplay}`
    }

    @action startTimer = (): void => {
        this.isTimerRunning = true;
    }

    @action stopTimer = (): void => {
        this.isTimerRunning = false;
    }

    @action resetTimer = (): void => {
        this.stopTimer();
        this.millisecondsLeft = 1500000;
    }

    constructor() {
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
            }
        });
    }
}