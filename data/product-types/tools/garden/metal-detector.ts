import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeMetalDetector = PType({
    name: 'Metal detector',
    key: 'metaldetector',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});