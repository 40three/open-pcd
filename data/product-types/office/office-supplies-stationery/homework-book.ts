
import { ag } from '../../../attribute-groups';

PType({
    name: 'Homework book',
    key: 'homeworkbook',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});