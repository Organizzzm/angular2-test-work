import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ContactItem, ContactGroup } from '../contacts/interfaces/contacts';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let contacts: ContactItem[] = [
            {
                uid: 1,
                name: 'Dmitry',
                surname: 'Organizzzm',
                age: 11,
                group: 1,
                distriction: 'dgsgsdgsd',
                note: 'yeah, baby!'
            },
            {
                uid: 2,
                name: 'Dmitry2',
                surname: 'Organizzzm',
                age: 11,
                group: 2,
                distriction: 'dgsgsdgsd',
                note: 'yeah, baby!'
            },
            {
                uid: 3,
                name: 'Dmitry3',
                surname: 'Organizzzm',
                age: 11,
                group: 3,
                distriction: 'dgsgsdgsd',
                note: 'yeah, baby!'
            }
        ];

        let groups: ContactGroup[] = [
            {
                uid: 1,
                name: 'quantum'
            },
            {
                uid: 2,
                name: 'a1-studio'
            },
            {
                uid: 3,
                name: 'for the rooms lab'
            }
        ];

        return {
            contacts: contacts,
            groups: groups
        }
    }
}