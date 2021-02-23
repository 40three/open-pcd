import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeTelevision = PType({
    name: 'Television',
    key: 'television',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});