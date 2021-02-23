
import { ag } from '../../../attribute-groups';

export const productTypeBlurayPlayer = PType({
    name: 'Bluray player',
    key: 'blurayplayer',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});