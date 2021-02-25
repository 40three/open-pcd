import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeVoiceAssistant = PType({
    name: 'Voice assistant',
    key: 'voiceassistant',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});