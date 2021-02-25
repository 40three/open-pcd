

import { ag } from '../../../attribute-groups';

PType({
    name: 'Dishwasher',
    key: 'dishwasher',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});