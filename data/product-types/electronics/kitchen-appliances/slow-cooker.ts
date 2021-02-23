
import { ag } from '../../../attribute-groups';

PType({
    name: 'Slow cooker',
    key: 'slowcooker',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});