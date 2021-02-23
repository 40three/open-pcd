
import { ag } from '../../../attribute-groups';

PType({
    name: 'Bluray player',
    key: 'blurayplayer',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});