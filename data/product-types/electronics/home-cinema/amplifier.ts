
import { ag } from '../../../attribute-groups';

PType({
    name: 'Amplifier',
    key: 'amplifier',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});