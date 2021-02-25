import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeLawnShear = PType({
    name: 'Lawn shear',
    key: 'lawnshear',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});