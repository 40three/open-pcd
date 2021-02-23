import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeKettle = PType({
    name: 'Kettle',
    key: 'kettle',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});