import { computed, extendObservable } from 'mobx';
import { IPomodoro } from '../../common/models';

export default class PomdoroModel<IPomodoro> {
    constructor(id: number, startTime: Date, endTime: Date, category: string, project: string, task: string,
                tags: string[]) {
        extendObservable(this, {
            id,
            startTime,
            endTime,
            category,
            project,
            task,
            tags
        })
    }
}