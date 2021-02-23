
import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeIceCrusher = PType({
    name: 'Ice crusher',
    key: 'icecrusher',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});