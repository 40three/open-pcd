

import { ag } from '../../../attribute-groups';

export const productTypeSlushMachine = PType({
    name: 'Slush machine',
    key: 'slushmachine',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});