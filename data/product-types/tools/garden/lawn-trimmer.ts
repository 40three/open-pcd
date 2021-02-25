import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeLawnTrimmer = PType({
    name: 'Lawn trimmer',
    key: 'lawntrimmer',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});