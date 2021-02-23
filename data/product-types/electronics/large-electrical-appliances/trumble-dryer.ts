
import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeTrumbleDryer = PType({
    name: 'Trumble dryer',
    key: 'trumbledryer',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});