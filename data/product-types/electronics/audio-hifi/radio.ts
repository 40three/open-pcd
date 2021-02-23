import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeRadio = PType({
    name: 'Radio',
    key: 'radio',
    categories: ['audioHifi', 'homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});