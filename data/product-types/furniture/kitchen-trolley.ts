
import { ag } from '../../attribute-groups';

PType({
    name: 'Kitchen trolley',
    key: 'kitchentrolley',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});