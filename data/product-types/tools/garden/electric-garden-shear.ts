import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeElectricGardenShear = PType({
    name: 'Electric garden shear',
    key: 'electricgardenshear',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});