
import { ag } from '../../../attribute-groups';

PType({
    name: 'Sticker',
    key: 'sticker',
    categories: ['stationery'],
    attributeRefs: [
        ...ag.common,
    ]
});