import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHomeTheaterSystem = PType({
    name: 'Home theater system',
    key: 'hometheatersystem',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});