
import { ag } from '../../../attribute-groups';

export const productTypeIceCubeMachine = PType({
    name: 'Ice cube machine',
    key: 'icecubemachine',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});