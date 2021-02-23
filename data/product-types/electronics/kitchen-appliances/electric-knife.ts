
import { ag } from '../../../attribute-groups';

export const productTypeElectricKnife = PType({
    name: 'Electric knife',
    key: 'electricknife',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});