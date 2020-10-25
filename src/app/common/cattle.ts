import { CattleCategory } from './cattle-category';

export class Cattle {
    id: bigint;
    sex: string;
    bday: Date;
    check: Date;
    age: number;
    price: number;
    imageUrl: string;
    category: CattleCategory;
}