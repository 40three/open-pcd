
import { ag } from '../../../attribute-groups';

PType({
    name: 'Tissue paper',
    key: 'tissuepaper',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});