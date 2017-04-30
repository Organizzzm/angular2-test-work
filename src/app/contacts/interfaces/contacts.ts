export class ContactItem {
    uid: number;
    name: string;
    surname: string;
    age: number;
    group: number;
    distriction: string;
    note: string;
    select?: boolean;

    constructor() {
        this.uid = 0;
        this.name = '';
        this.surname = '';
        this.age = 0;
        this.group = 0;
        this.distriction = '';
        this.note = '';
        this.select = false;
    }
}

export class ContactGroup {
    uid: number;
    name: string;
}