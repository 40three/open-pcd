import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeLawnEdgeTrimmer = PType({
    name: 'Lawn edge trimmer',
    key: 'lawnedgetrimmer',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});