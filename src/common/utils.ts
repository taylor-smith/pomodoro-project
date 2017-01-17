const UUID_RE = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);

export const isString = (x: any) => typeof x === 'string';
export const isObject = (x: any) => x && x.constructor === Object
export const isUuid = (x: any) => isString(x) && UUID_RE.test(x);
export const isArray = (x: any) => Array.isArray(x);
export const isInteger = (x: any) => Number.isInteger(x);