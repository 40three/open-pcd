import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeStarterKits = PType({
    name: 'Starter kits',
    key: 'starterkits',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});