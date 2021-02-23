
import { ag } from '../../../attribute-groups';

export const productTypeSatelliteCompleteSystem = PType({
    name: 'Satellite complete system',
    key: 'satellitecompletesystem',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});