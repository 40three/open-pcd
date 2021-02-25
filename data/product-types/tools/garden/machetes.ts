import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeMachetes = PType({
    name: 'Machetes',
    key: 'machetes',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});