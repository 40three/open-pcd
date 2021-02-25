
import { ag } from '../../../attribute-groups';

PType({
    name: 'Smart lighting',
    key: 'smartlighting',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});