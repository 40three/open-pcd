
import { ag } from '../../../attribute-groups';

PType({
    name: 'Universal paper',
    key: 'universalpaper',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});