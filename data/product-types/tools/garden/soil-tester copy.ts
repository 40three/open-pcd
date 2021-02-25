import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeOnionPlanter = PType({
    name: 'Onion planter',
    key: 'onionplanter',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});