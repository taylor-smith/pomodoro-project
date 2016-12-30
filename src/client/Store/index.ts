import { action } from 'mobx';
import * as timerActions from './timerActions';

interface IStore {
    [key: string]: string,
}

export default class Store<IStore> {
    constructor() {
        this.assignActions(timerActions);
    }

    assignActions = (...unwrappedActions: Object[]) => {
        Object.keys(unwrappedActions).forEach(method =>
            (this[method] = action(unwrappedActions[method].bind(this)))
        );
    };
}