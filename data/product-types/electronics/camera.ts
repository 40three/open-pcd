import { ag } from '../../attribute-groups';
import { s } from '../../generated';
import { PSub, PType } from '../../../abstractions';

export const productTypeCamera = PType({
    name: 'Camera (photo)',
    key: 'camera',
    definitionUrl: 'https://en.wikipedia.org/wiki/Camera',
    categories: ['photo'],
    subTypes: {
        'actionCamera': PSub({
            name: 'Action camera',
        }),
        'analog': PSub({
            name: 'Analog camera',
        }),
        'compact': PSub({
            name: 'Compact camera (digital)'
        }),
        'dslr': PSub({
            name: 'DSLR camera (digital single-lens)',
            description: 'Digital single-lens reflex camera with interchangeable lense.',
        })
    },
    attributeRefs: [
        ...ag.common,
        ...s.camera
    ]
});
