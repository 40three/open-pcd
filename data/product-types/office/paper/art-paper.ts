
import { ag } from '../../../attribute-groups';

PType({
    name: 'Art paper',
    key: 'artpaper',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});