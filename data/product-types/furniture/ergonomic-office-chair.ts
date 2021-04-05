
import { ag } from '../../attribute-groups';

PType({
    name: 'Ergonomic office chair',
    key: 'ergonomicofficechair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});