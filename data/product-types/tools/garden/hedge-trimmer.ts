import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHedgeTrimmer = PType({
    name: 'Hedge trimmer',
    key: 'knifetrimmer',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});