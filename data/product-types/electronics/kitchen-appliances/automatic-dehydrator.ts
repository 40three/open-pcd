import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeAutomaticDehydrator = PType({
    name: 'Automatic dehydrator',
    key: 'automaticdehydrator',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});