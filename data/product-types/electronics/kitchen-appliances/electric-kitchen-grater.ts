
import { ag } from '../../../attribute-groups';

export const productTypeElectricKitchenGrater = PType({
    name: 'Electric kitchen grater',
    key: 'electrickitchengrater',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});