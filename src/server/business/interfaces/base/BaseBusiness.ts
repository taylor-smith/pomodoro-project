import { Read } from '../common/Read';
import { Write } from '../common/Write';

export interface BaseBusiness<T> extends Read<T>, Write<T> {}