import { observable } from 'mobx';
// import { IPomodoro } from '../../common/models';

export default class PomdoroModel<> {
    id: string;
    startTime: Date;
    endTime: Date;
    @observable category: string;
    @observable project: string;
    @observable task: string;
    @observable tags: string[];
    constructor(id: string, startTime: Date, endTime: Date, category: string, project: string, task: string,
                tags: string[]) {
        this.id = id,
        this.startTime = startTime,
        this.endTime = endTime,
        this.category = category,
        this.project = project,
        this.task = task,
        this.tags = tags
    }
}