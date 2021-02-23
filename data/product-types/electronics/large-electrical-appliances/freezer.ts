

import { ag } from '../../../attribute-groups';

export const productTypeFreezer = PType({
    name: 'Freezer',
    key: 'freezer',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});