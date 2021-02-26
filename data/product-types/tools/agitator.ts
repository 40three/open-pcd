
import { ag } from '../../../attribute-groups';

PType({
    name: 'Agitator',
    key: 'agitator',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});