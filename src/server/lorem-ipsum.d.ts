interface options {
    count: number,
    units: string
}

declare module 'lorem-ipsum' {
    export default function loreumIpsum(options: options): string
}