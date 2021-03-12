
import { ag } from '../../attribute-groups';

PType({
    name: 'Wall board',
    key: 'wallboard',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});