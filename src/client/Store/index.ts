import { observable, action } from 'mobx';

export default class Store {
    @observable counter = 0;

    @action increment = (): void => {
        this.counter++;
    }
}