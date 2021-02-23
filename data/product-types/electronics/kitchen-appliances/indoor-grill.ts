
import { ag } from '../../../attribute-groups';

export const productTypeIndoorGrill = PType({
    name: 'Indoor grill',
    key: 'indoorgrill',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});