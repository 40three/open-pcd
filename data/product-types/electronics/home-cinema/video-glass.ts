import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeVideoGlass = PType({
    name: 'Video glass',
    key: 'videoglass',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});