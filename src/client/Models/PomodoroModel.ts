import { observable, action } from 'mobx';
import moment from 'moment';

export default class PomodoroModel {
    @observable public category: string;
    @observable public project: string;
    @observable public task: string;
    @observable public tags: string;
    constructor(
        public id: string,
        public startTime: number,
        public endTime: number,
        category: string,
        project: string,
        task: string,
        tags: string) {
            this.category = category;
            this.project = project;
            this.task = task;
            this.tags = tags;
        }
    
    @action setProject: React.FormEventHandler<HTMLInputElement> = (e) => {
        this.project = e.currentTarget.value;
    }
    @action setCategory: React.FormEventHandler<HTMLInputElement> = (e) => {
        this.category = e.currentTarget.value;
    }
    @action setTask: React.FormEventHandler<HTMLInputElement> = (e) => {
        this.task = e.currentTarget.value;
    }
    @action setTags: React.FormEventHandler<HTMLInputElement> = (e) => {
        this.tags = e.currentTarget.value;
    }
}