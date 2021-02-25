
import { ag } from '../../../attribute-groups';

PType({
    name: 'Egg boiler',
    key: 'eggboiler',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});