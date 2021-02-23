
import { ag } from '../../../attribute-groups';

export const productTypeEggBoiler = PType({
    name: 'Egg boiler',
    key: 'eggboiler',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});