import { BaseSchema } from './BaseSchema';
import { IPomodoroModel } from '../../../common/models'
import Sql from '../../sql';
import moment from 'moment';

export class PomodoroSchema extends BaseSchema {
    startTime: number;
    endTime: number;
    category: string;
    project: string;
    task: string;
    tags: string;
    async create (pomodoro: IPomodoroModel, callback: any) {
        const sql = new Sql();
        try {
            await sql.open(true, false);
            await sql.run('BEGIN TRANSACTION');
            await sql.run('INSERT INTO pomodoros VALUES ($id, $startTime, $endTime, $category, $project, $task, $tags)', {
                $id: pomodoro.id,
                $startTime: moment(pomodoro.startTime).unix(),
                $endTime: moment(pomodoro.endTime).unix(),
                $category: pomodoro.category,
                $project: pomodoro.project,
                $task: pomodoro.task,
                $tags: pomodoro.tags
            })
            await sql.run('COMMIT')
        } catch (err) {
            await sql.run('ROLLBACK');
        } finally {
            sql.close();
            callback();
        }    
    }
}