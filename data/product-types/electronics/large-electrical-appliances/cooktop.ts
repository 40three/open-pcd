
import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeCooktop = PType({
    name: 'Cooktop',
    key: 'cooktop',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});