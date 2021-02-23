

import { ag } from '../../../attribute-groups';

export const productTypeElectricFireplace = PType({
    name: 'Electric fireplace',
    key: 'electricfireplace',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});