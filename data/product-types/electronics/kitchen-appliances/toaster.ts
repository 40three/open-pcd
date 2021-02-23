import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeToaster = PType({
    name: 'Toaster',
    key: 'toaster',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});