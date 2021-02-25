
import { ag } from '../../../attribute-groups';

PType({
    name: 'Thermostat',
    key: 'thermostat',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});