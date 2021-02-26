
import { ag } from '../../../attribute-groups';

PType({
    name: 'Air cleaner',
    key: 'aircleaner',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});