import { ag } from '../../attribute-groups';
import { s } from '../../generated';
import { PType } from '../../../abstractions';

export const productTypeCamera = PType({
    name: 'Camera (photo)',
    key: 'camera',
    definitionUrl: 'https://en.wikipedia.org/wiki/Camera',
    categories: ['photo'],
    attributeRefs: [
        ...ag.common,
        ...s.camera
    ]
});
