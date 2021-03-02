
import { ag } from '../../../attribute-groups';

PType({
    name: 'Post-it',
    key: 'postit',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});