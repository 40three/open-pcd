

import { ag } from '../../../attribute-groups';

PType({
    name: 'Beer keg cooler',
    key: 'beerkegcooler',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});