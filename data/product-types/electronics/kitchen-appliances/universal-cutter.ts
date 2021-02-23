
import { ag } from '../../../attribute-groups';

export const productTypeUniversalCutter = PType({
    name: 'Universal cutter',
    key: 'universalcutter',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});