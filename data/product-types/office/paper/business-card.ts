
import { ag } from '../../../attribute-groups';

PType({
    name: 'Business card',
    key: 'businesscard',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});