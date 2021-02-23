

import { ag } from '../../../attribute-groups';

PType({
    name: 'Cooktop',
    key: 'cooktop',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});