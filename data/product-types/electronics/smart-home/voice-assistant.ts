
import { ag } from '../../../attribute-groups';

PType({
    name: 'Voice assistant',
    key: 'voiceassistant',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});