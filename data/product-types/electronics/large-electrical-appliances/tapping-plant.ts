

import { ag } from '../../../attribute-groups';

export const productTypeTappingPlant = PType({
    name: 'Tapping plant',
    key: 'tappingplant',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});