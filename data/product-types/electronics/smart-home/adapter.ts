import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeAdapter = PType({
    name: 'Adapter',
    key: 'adapter',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});