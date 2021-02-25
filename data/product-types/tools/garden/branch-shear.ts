import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeBranchShear = PType({
    name: 'Branch shear',
    key: 'branchshear',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});