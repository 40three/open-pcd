
import { ag } from '../../../attribute-groups';

PType({
    name: 'Loudspeaker',
    key: 'loudspeaker',
    categories: ['audioHifi', 'homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});