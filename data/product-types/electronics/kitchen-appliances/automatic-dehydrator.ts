
import { ag } from '../../../attribute-groups';

PType({
    name: 'Automatic dehydrator',
    key: 'automaticdehydrator',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});