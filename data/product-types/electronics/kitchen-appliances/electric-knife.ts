
import { ag } from '../../../attribute-groups';

PType({
    name: 'Electric knife',
    key: 'electricknife',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});