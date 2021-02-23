import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeFilmSealers = PType({
    name: 'Film sealer',
    key: 'filmsealer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});