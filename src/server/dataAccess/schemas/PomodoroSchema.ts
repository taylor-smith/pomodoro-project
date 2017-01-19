import { BaseSchema } from './BaseSchema';
import * as models from '../../../common/models'
import Sql from '../../sql';
import moment from 'moment';

export class PomodoroSchema extends BaseSchema {
    startTime: number;
    endTime: number;
    category: string;
    project: string;
    task: string;
    tags: string;
    async create (pomodoro: models.IPomodoroModel, callback: any) {
        const sql = new Sql();
        try {
            await sql.open(true, false);
            await sql.run('BEGIN TRANSACTION');
            await sql.run('INSERT INTO pomodoros VALUES ($id, $startTime, $endTime, $category, $project, $task, $tags)', {
                $id: pomodoro.id,
                $startTime: pomodoro.startTime,
                $endTime: pomodoro.endTime,
                $category: pomodoro.category,
                $project: pomodoro.project,
                $task: pomodoro.task,
                $tags: pomodoro.tags
            })
            await sql.run('COMMIT')
            callback(null, pomodoro);
        } catch (err) {
            await sql.run('ROLLBACK');
            callback(err, null)
        } finally {
            sql.close();
        }    
    };
    async getAll (callback: any) {
        const sql = new Sql();
        try {
            await sql.open();
            const rawPomodoros = await sql.all('SELECT * FROM pomodoros');
            const pomodoros = models.deserializePomodoros(rawPomodoros);
            const serializedPomodoros = models.serializePomodoros(pomodoros);
            callback(null, serializedPomodoros);
        } catch (err) {
            callback(err, null);
        } finally {
            sql.close();
        }
    }
}