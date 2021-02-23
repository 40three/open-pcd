
import { ag } from '../../../attribute-groups';

export const productTypeBeamer = PType({
    name: 'Beamer',
    key: 'beamer',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});