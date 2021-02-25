import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSoilTester = PType({
    name: 'Soil tester',
    key: 'soiltester',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});