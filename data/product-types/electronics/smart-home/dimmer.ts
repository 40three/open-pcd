import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeDimmer = PType({
    name: 'Dimmer',
    key: 'dimmer',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});