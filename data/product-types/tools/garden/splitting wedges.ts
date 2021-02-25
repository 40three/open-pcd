import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSplittingWedges = PType({
    name: 'Splitting wedges',
    key: 'splittingwedges',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});