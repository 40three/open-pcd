
import { ag } from '../../../attribute-groups';

PType({
    name: 'Warning indicator',
    key: 'warningindicator',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});