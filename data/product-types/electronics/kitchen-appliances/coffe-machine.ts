import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeCoffeeMachine = PType({
    name: 'Coffee machine',
    key: 'coffeemachine',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});