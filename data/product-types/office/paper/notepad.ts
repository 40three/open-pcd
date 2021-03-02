
import { ag } from '../../../attribute-groups';

PType({
    name: 'Notepad',
    key: 'notepad',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});