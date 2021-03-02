
import { ag } from '../../../attribute-groups';

PType({
    name: 'Continuous paper',
    key: 'continuouspaper',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});