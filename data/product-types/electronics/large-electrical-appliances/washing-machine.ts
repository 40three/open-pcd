

import { ag } from '../../../attribute-groups';

PType({
    name: 'Washing machine',
    key: 'washingmachine',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});