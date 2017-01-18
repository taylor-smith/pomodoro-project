export interface Write<T> {
    create: (item: T, callback: (error: any, result: any) => void) => void;
}