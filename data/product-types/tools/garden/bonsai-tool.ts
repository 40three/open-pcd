import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeBonsaiTool = PType({
    name: 'Bonsai tool',
    key: 'bonsaitool',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});