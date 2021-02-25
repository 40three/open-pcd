import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeAxeGrinder = PType({
    name: 'Axe grinder',
    key: 'axegrinder',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});