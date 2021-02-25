import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHandDrill = PType({
    name: 'Hand drill',
    key: 'handdrill',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});