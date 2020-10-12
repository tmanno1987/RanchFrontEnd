import { Users } from './users';

export class Tasks {
    tid: bigint;
    name: string;
    active: boolean;
    avgTime: number;
    lastUpdate: Date;
    taskType: string;
    compTask: Set<Users>;
}