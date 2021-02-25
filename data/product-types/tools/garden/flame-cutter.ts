import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeFlameCutter = PType({
    name: 'Flame cutter',
    key: 'flamecutter',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});