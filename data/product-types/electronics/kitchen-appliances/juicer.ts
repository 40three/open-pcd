
import { ag } from '../../../attribute-groups';

export const productTypeJuicer = PType({
    name: 'Juicer',
    key: 'juicer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});