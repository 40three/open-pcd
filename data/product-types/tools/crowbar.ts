
import { ag } from '../../../attribute-groups';

PType({
    name: 'Crowbar',
    key: 'crowbar',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});