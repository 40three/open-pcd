import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypePlug = PType({
    name: 'Plug',
    key: 'plug',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});