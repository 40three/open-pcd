
import { ag } from '../../../attribute-groups';

PType({
    name: 'Phono preamplifier',
    key: 'phonoPreamplifier',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});