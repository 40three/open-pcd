

import { ag } from '../../../attribute-groups';

PType({
    name: 'Ice cream machine',
    key: 'icecreammachine',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});