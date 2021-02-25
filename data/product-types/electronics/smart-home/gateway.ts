import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGateway = PType({
    name: 'Gateway',
    key: 'gateway',
    categories: ['smartHome',
    attributeRefs: [
        ...ag.common,
    ]
});