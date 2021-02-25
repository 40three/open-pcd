import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypePlough = PType({
    name: 'Plough',
    key: 'plough',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});