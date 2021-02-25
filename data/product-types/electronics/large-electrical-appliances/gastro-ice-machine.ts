

import { ag } from '../../../attribute-groups';

PType({
    name: 'Gastro ice machine',
    key: 'gastroicemachine',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});