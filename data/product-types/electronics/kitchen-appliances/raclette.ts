import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeRaclette = PType({
    name: 'Raclette',
    key: 'raclette',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});