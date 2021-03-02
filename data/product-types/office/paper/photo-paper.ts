
import { ag } from '../../../attribute-groups';

PType({
    name: 'Photo paper',
    key: 'photopaper',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});