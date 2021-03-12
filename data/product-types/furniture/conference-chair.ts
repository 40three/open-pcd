
import { ag } from '../../attribute-groups';

PType({
    name: 'Conference chair',
    key: 'conferencechair',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});