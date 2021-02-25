

import { ag } from '../../../attribute-groups';

PType({
    name: 'Freezer',
    key: 'freezer',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});