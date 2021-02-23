
import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeBeerKegCooler = PType({
    name: 'Beer keg cooler',
    key: 'beerkegcooler',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});