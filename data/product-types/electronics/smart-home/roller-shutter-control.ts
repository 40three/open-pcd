import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeRollerShutterControl = PType({
    name: 'Roller shutter control',
    key: 'rollershuttercontrol',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});