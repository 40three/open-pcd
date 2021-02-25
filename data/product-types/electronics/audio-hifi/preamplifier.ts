
import { ag } from '../../../attribute-groups';

PType({
    name: 'Preamplifier',
    key: 'preamplifier',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});