
import { ag } from '../../../attribute-groups';

PType({
    name: 'Weather meter',
    key: 'weathermeter',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});