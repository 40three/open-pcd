import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeHighPressureCleaner = PType({
    name: 'High pressure cleaner',
    key: 'highpressurecleaner',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});