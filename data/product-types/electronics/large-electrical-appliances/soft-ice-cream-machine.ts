
import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSoftIceCreamMachine = PType({
    name: 'Soft ice cream machine',
    key: 'softicecreammachine',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});