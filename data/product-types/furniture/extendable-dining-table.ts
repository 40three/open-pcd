
import { ag } from '../../attribute-groups';

PType({
    name: 'Extendable dining table',
    key: 'extendablediningtable',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});