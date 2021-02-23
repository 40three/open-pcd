
import { ag } from '../../../attribute-groups';

export const productTypeVideoRecorder = PType({
    name: 'Video recorder',
    key: 'videorecorder',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});