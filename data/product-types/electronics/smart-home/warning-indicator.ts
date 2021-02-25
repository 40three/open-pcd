import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeWarningIndicator = PType({
    name: 'Warning indicator',
    key: 'warningindicator',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});