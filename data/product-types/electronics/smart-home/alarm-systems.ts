import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeAlarmSystems = PType({
    name: 'Alarm systems',
    key: 'alarmsystems',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});