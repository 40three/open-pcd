
import { ag } from '../../../attribute-groups';

export const productTypeHomeLoudspeaker = PType({
    name: 'Loudspeaker',
    key: 'loudspeaker',
    categories: ['audioHifi', 'homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});