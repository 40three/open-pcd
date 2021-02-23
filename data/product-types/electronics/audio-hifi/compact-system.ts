import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeCompactSystem = PType({
    name: 'Compact system',
    key: 'compactsystem',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});