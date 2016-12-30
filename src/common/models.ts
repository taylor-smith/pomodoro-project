export interface ITimer {
    id: string,
    pomodoroLength: number,
    shortBreakLength: number,
    longBreakLength: number
}

export interface IPomodoro {
    id: number,
    startDate: Date,
    endDate: Date,
    category: string,
    project: string,
    task: string,
    tags: string[]
}