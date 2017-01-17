import { action, observable, computed, runInAction } from 'mobx';
import PomodoroModel from '../models/PomodoroModel';
import uuid from 'node-uuid';
import moment from 'moment';
import 'whatwg-fetch';


class Store {

    @observable timerValue = 0;
    @observable pomodoroMap = new Map();
    @observable timerType = '';
    @observable workSessionSeconds = 3
    @observable longBreakInterval = 3
    @observable longBreakSeconds = 2
    @observable shortBreakSeconds = 1
    @observable tally = 0;

    @observable workingPomodoro: PomodoroModel | null = null;

    @action tick = () => {
        this.timerValue--;
        if (this.timerValue > 0) {
            setTimeout(this.tick, 1000);
        } else {
            this.tally++;
            if (this.timerType === 'workSession') {
                this.createWorkingPomodoro();
            }
        }
    }

    @action startTimer = () => {
        if (this.workingPomodoro) {
            this.savePomodoro(this.workingPomodoro);
            this.workingPomodoro = null;
        }

        if (this.tally % 2 === 0) {
            this.timerType = 'workSession';
            this.timerValue = this.workSessionSeconds;
        } else if (((this.tally - 1) / 2 - this.longBreakInterval) % (this.longBreakInterval + 1) === 0) {
            this.timerType = 'longBreak';
            this.timerValue = this.longBreakSeconds;
        } else {
            this.timerType = 'shortBreak';
            this.timerValue = this.shortBreakSeconds;
        }
        setTimeout(this.tick, 1000);
    }

    @action createWorkingPomodoro() {
        const id = uuid.v4();
        const startTime = moment().subtract(this.workSessionSeconds, 'seconds');
        const endTime = moment();
        const category = '';
        const project = '';
        const task = '';
        const tags = '';
        this.workingPomodoro = new PomodoroModel(
            id,
            startTime,
            endTime,
            category,
            project,
            task,
            tags
        )
    }

    @action savePomodoro(pomodoro: PomodoroModel) {
        this.pomodoroMap.set(pomodoro.id, pomodoro);
    }

    @action getPomodoros = async () => {
        let pomodoros: any = await fetch(`${process.env.API_PREFIX}/pomodoros`).then(res => res.json());
        runInAction(() => {
            pomodoros.forEach((pomodoro: any) => this.pomodoroMap.set(pomodoro.id, new PomodoroModel(
                pomodoro.id,
                pomodoro.startTime,
                pomodoro.endTime,
                pomodoro.category,
                pomodoro.project,
                pomodoro.task,
                pomodoro.tags
            )));
        })
    }
}

export default new Store() as Readonly<Store>;