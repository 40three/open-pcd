import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSwitch = PType({
    name: 'Switch',
    key: 'switch',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});