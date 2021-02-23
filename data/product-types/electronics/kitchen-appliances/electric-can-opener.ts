import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeElectricCanOpener = PType({
    name: 'Electric can opener',
    key: 'electriccanopener',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});