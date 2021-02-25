import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeThermostat = PType({
    name: 'Thermostat',
    key: 'thermostat',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});