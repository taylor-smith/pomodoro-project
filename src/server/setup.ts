import Chance from 'chance';
import uuid from 'node-uuid';
import loremIpsum from 'lorem-ipsum';
import Sql from './sql';

const chance = new Chance();
const NUM_POMODOROS = 50;

const getRandomPomodoroIds = (n: number) => {
    const result: string[] = [];
    for (let i=0; i<n; i++) {
        result.push(uuid.v4());
    }
    return result;
}

async function setup() {
    const sql = new Sql();
    console.log(sql);
    await sql.open(true, true);
    await sql.run('CREATE TABLE pomodoros (id, category, project, task, tags)');
    await sql.run('BEGIN TRANSACTION');
    try {
        const pomodoroIds = getRandomPomodoroIds(NUM_POMODOROS);
        console.log(pomodoroIds);
        for (let id of pomodoroIds) {
            const category = chance.pickone(['Personal', 'Work', 'Business Development', 'Growth']);
            let project = '';
            switch (category) {
                case 'Personal':
                    project = chance.pickone(['Gym', 'Cooking', 'Cleaning'])
                    break;
                case 'Work':
                    project = 'CPG';
                    break;
                case 'Business Development':
                    project = 'Pomodoro App';
                    break;
                case 'Growth':
                    project = 'Howard Hughes: His Life and Madness';
                    break;
            }
            sql.run('INSERT INTO pomodoros VALUES ($id, $category, $project, $task, $tags)', {
                $id: id,
                $category: category,
                $project: project,
                $task: loremIpsum({
                    count: chance.integer({min: 1, max: 3}),
                    units: 'words'
                }),
                $tags: 'tag1, tag2, tag3'
            })
        }
        await sql.run('COMMIT');
    } catch (err) {
        await sql.run('ROLLBACK');
    }
    sql.close();
}

try {
    setup();
} catch (err) {
    console.log(err);
}