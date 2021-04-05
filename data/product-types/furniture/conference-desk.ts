
import { ag } from '../../attribute-groups';

PType({
    name: 'Conference desk',
    key: 'conferencedesk',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});