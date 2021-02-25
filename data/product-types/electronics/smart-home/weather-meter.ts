import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeWeatherMeter = PType({
    name: 'Weather meter',
    key: 'weathermeter',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});