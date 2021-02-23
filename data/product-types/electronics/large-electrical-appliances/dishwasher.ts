
import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeDishwasher = PType({
    name: 'Dishwasher',
    key: 'dishwasher',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});