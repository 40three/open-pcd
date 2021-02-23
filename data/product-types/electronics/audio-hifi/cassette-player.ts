
import { ag } from '../../../attribute-groups';

export const productTypeCassettePlayer = PType({
    name: 'Cassette player',
    key: 'cassetteplayer',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});