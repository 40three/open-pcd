import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSocket = PType({
    name: 'Socket',
    key: 'socket',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});