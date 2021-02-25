import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeBinderTwine = PType({
    name: 'Binder twine',
    key: 'bindertwine',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});