
import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeIceCreamMachine = PType({
    name: 'Ice cream machine',
    key: 'icecreammachine',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});