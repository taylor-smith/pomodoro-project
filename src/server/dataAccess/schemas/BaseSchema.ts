import { IEntityModel } from '../../../common/models';

export class BaseSchema {
    id: string;
    async create(item: IEntityModel, callback: any) {};
}