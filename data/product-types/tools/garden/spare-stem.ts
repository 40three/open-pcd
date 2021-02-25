import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSpareStem = PType({
    name: 'Spare stem',
    key: 'sparestem',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});