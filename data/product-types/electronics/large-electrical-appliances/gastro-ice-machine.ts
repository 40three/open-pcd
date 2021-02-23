

import { ag } from '../../../attribute-groups';

export const productTypeGastroIceMachine = PType({
    name: 'Gastro ice machine',
    key: 'gastroicemachine',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});