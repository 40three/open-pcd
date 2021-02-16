import { ag } from '../../attribute-groups';
import { s } from '../../generated';
import { PType } from '../../../abstractions';

export const productTypeCamera = PType({
    name: 'Camera (photo)',
    key: 'camera',
    categories: ['photo'],
    attributeRefs: [
        ...ag.common,
        ...s.camera
    ]
});
