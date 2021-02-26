
import { ag } from '../../../attribute-groups';

PType({
    name: 'Vice',
    key: 'vice',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});