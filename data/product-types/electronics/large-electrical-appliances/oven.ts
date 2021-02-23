
import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeOven = PType({
    name: 'Oven',
    key: 'oven',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});