import { BaseRepository } from './BaseRepository';
import { IPomodoroModel } from '../../common/models';
import { PomodoroSchema } from '../dataAccess/schemas/PomodoroSchema';

export class PomodoroRepository extends BaseRepository<IPomodoroModel> {
    constructor() {
        super(new PomodoroSchema());
    }
}