import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeTwistTie = PType({
    name: 'Twist tie',
    key: 'twisttie',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});