

import { ag } from '../../../attribute-groups';

PType({
    name: 'Tapping plant',
    key: 'tappingplant',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});