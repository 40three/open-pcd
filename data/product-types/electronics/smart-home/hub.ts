import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHub = PType({
    name: 'Hub',
    key: 'hub',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});