

import { ag } from '../../../attribute-groups';

PType({
    name: 'Slush machine',
    key: 'slushmachine',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});