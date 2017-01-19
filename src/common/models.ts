import * as utils from './utils';
import moment from 'moment';

export interface IEntityModel {
    id: string,
    create: (item: any, callback: any) => void,
    getAll: (callback: any) => void,
    // get: (item: any, callback: any) => void,
}

export interface IPomodoroModel extends IEntityModel {
    startTime: number,
    endTime: number,
    category: string,
    project: string,
    task: string,
    tags: string
}

export function deserializePomodoro(x: any): IPomodoroModel {
    if(!utils.isObject(x)) { throw 'Pomodoro is not an object'; }
    if(!utils.isUuid(x.id)) { throw 'id is not a UUID'; }
    if(!utils.isInteger(x.startTime)) { throw 'start time is not an integer'; }
    if(!utils.isInteger(x.endTime)) { throw 'end time is not an integer'; }
    if(!utils.isString(x.category)) { throw 'category is not a string'; }
    if(!utils.isString(x.project)) { throw 'project is not a string'; }
    if(!utils.isString(x.task)) { throw 'task is not a string'; }
    if(!utils.isString(x.tags)) { throw 'tags are not a string'; }
    return x as IPomodoroModel;
}

export function deserializePomodoros(x: any[]) {
    return x.map(deserializePomodoro);
}

export function serializePomodoros(pomodoros: IPomodoroModel[]) {
    return pomodoros;
}