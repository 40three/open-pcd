import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeDeepFryer = PType({
    name: 'Deep fryer',
    key: 'deepfryer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});