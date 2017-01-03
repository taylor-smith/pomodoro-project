import { action, observable, computed } from 'mobx';
// import * as timerActions from './timerActions';
import TimerModel from '../models/TimerModel';
import PomodoroModel from '../models/PomodoroModel';


export default class Store {
    // constructor() {
    //     this.assignActions(timerActions);
    // }

    // assignActions = (unwrappedActions: any) => {
    //     Object.keys(unwrappedActions).forEach(method =>
    //         // console.log(method)
    //         ((<any>this)[method] = action(unwrappedActions[method].bind(this)))
    //     );
    // };
    // createTimer = () => action(timerActions.createTimer(this));
    @observable timer: TimerModel;

    @observable newPomodoro: PomodoroModel;

    createNewPomodoro = () => {
        console.log('creating the new pomodoro');
    }

    @computed get isNewPomodoro() { return this.newPomodoro ? true : false; }

    @observable pomodoros: PomodoroModel[];
}