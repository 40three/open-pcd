

import { ag } from '../../../attribute-groups';

export const productTypeIceFlakeMaker = PType({
    name: 'Ice flake maker',
    key: 'iceflakemaker',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});