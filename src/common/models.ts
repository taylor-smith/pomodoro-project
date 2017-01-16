import * as utils from './utils';

export interface IPomodoro {
    id: string,
    category: string,
    project: string,
    task: string,
    tags: string[]
}

export function deserializePomodoro(x: any): IPomodoro {
    if(!utils.isObject(x)) { throw 'Pomodoro is not an object'; }
    if(!utils.isUuid(x.id)) { throw 'id is not a UUID'; }
    if(!utils.isString(x.category)) { throw 'category is not a string'; }
    if(!utils.isString(x.project)) { throw 'project is not a string'; }
    if(!utils.isString(x.task)) { throw 'task is not a string'; }
    if(!utils.isString(x.tags)) { throw 'tags are not a string'; }
    return x as IPomodoro;
}

export function deserializePomodoros(x: any[]) {
    return x.map(deserializePomodoro);
}

export function serializePomodoros(pomodoros: IPomodoro[]) {
    return pomodoros;
}