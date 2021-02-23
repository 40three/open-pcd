import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSatelliteDish = PType({
    name: 'Satellite dish',
    key: 'satellitedish',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});