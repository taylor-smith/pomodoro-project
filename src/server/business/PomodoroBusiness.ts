import { PomodoroRepository } from '../repository/PomodoroRepository';
import { IPomodoroModel } from '../../common/models';

export class PomodoroBusiness implements PomodoroBusiness {
    private _pomodoroRepository: PomodoroRepository;

    constructor () {
        this._pomodoroRepository = new PomodoroRepository();
    }

    create (item: IPomodoroModel, callback: (error: any, result: any) => void) {
        this._pomodoroRepository.create(item, callback);
    }

    getAll (callback: (error: any, result: any) => void) {
        this._pomodoroRepository.getAll(callback)
    }
}