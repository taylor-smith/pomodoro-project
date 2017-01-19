import Read from './interfaces/Read';
import { IWrite  } from './interfaces/Write';
import { IRead } from './interfaces/Read';
import { IEntityModel } from '../../common/models'
import { PomodoroSchema } from '../dataAccess/schemas/PomodoroSchema'
import Sql from '../sql';

export class BaseRepository<T> implements IWrite<T>, IRead<T> {
    private _model: IEntityModel;
    
    constructor (schemaModel: IEntityModel) {
        this._model = schemaModel;
    }
    create (item: T, callback: (error: any, result: any) => void) {
        this._model.create(item, callback);
    }

    getAll(callback: (error: any, result: any) => void) {
        this._model.getAll(callback);
    }
    
    // get(id: string, callback: (error: any, result: any) => void) {
    //     this._model.get(id, callback);
    // }
}