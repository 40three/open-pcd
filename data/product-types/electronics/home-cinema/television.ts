
import { ag } from '../../../attribute-groups';

PType({
    name: 'Television',
    key: 'television',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});