import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeAmplifier = PType({
    name: 'Amplifier',
    key: 'amplifier',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});