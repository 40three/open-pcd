import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHighPruner = PType({
    name: 'High pruner',
    key: 'highpruner',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});