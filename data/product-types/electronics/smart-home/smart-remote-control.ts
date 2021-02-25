import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeSmartRemoteControl = PType({
    name: 'Smart remote control',
    key: 'smartremotecontrol',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});