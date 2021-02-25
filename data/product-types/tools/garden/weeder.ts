import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeWeeder = PType({
    name: 'Weeder',
    key: 'weeder',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});