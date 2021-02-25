import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSmartLighting = PType({
    name: 'Smart lighting',
    key: 'smartlighting',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});