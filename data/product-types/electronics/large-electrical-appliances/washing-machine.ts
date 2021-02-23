

import { ag } from '../../../attribute-groups';

export const productTypeWashingMachine = PType({
    name: 'Washing machine',
    key: 'washingmachine',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});