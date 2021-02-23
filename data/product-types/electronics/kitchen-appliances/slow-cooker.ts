
import { ag } from '../../../attribute-groups';

export const productTypeSlowCooker = PType({
    name: 'Slow cooker',
    key: 'slowcooker',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});