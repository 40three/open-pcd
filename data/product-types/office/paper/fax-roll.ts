
import { ag } from '../../../attribute-groups';

PType({
    name: 'Fax roll',
    key: 'faxroll',
    categories: ['paper'],
    attributeRefs: [
        ...ag.common,
    ]
});