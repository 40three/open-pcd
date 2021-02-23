
import { ag } from '../../../attribute-groups';

export const productTypeMicrowave = PType({
    name: 'Microwave',
    key: 'microwave',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});