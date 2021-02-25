import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeMotorHoe = PType({
    name: 'Motor hoe',
    key: 'motorhoe',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});