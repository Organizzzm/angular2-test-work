export class ContactItem {
    name: string;
    surname: string;
    age: number;
    group: string;
    distriction: string;
    note: string;
    select: boolean;

    constructor() {
        this.name = '';
        this.surname = '';
        this.age = 0;
        this.group = '';
        this.distriction = '';
        this.note = '';
        this.select = false;
    }
}