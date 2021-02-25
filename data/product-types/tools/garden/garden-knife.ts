import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeGardenKnife = PType({
    name: 'Garden knife',
    key: 'gardenknife',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});