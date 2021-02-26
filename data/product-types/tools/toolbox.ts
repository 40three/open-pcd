
import { ag } from '../../../attribute-groups';

PType({
    name: 'Toolbox',
    key: 'toolbox',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});