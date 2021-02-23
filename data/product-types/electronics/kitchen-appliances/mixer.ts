
import { ag } from '../../../attribute-groups';

export const productTypeMixer = PType({
    name: 'Mixer',
    key: 'mixer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});