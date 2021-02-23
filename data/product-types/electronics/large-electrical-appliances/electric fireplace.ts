

import { ag } from '../../../attribute-groups';

PType({
    name: 'Electric fireplace',
    key: 'electricfireplace',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});