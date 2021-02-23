
import { ag } from '../../../attribute-groups';

export const productTypeBlurayRecorder = PType({
    name: 'Bluray recorder',
    key: 'blurayrecorder',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});