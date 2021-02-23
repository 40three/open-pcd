import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeWatterConditioner = PType({
    name: 'Watter conditioner',
    key: 'waterconditioner',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});