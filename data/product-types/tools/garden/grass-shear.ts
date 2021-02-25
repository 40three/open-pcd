import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGrassShear = PType({
    name: 'Grass shear',
    key: 'grassshear',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});