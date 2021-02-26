
import { ag } from '../../../attribute-groups';

PType({
    name: 'Cleaning tool',
    key: 'cleaningtool',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});