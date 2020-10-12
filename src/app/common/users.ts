import { Roles } from './roles';
import { Tasks } from './tasks';

export class Users {
    id: bigint;
    user: string;
    pass: string;
    firstName: string;
    lastName: string;
    pos: string;
    salary: number;
    email: string;
    phone: string;
    socialSecurityNumber: string;
    addr: string;
    city: string;
    state: string;
    zip: string;
    taskSet: Set<Tasks>;
    roles: Set<Roles>;
}