export interface IRead<T> {
    getAll: (callback: (error: any, result: any)=> void)=> void;
    // get: (id: string, callback: (error:any, result: T) => void) => void;
}