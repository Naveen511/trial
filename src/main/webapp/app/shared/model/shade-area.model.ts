import { Moment } from 'moment';

export interface IShadeArea {
    id?: number;
    noOfSeedlings?: number;
    date?: Moment;
    status?: number;
    createdBy?: number;
    modifiedBy?: number;
    createdAt?: Moment;
    updatedAt?: Moment;
    batchBatchName?: string;
    batchId?: number;
}

export class ShadeArea implements IShadeArea {
    constructor(
        public id?: number,
        public noOfSeedlings?: number,
        public date?: Moment,
        public status?: number,
        public createdBy?: number,
        public modifiedBy?: number,
        public createdAt?: Moment,
        public updatedAt?: Moment,
        public batchBatchName?: string,
        public batchId?: number
    ) {}
}
