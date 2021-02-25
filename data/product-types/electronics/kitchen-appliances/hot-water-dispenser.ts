
import { ag } from '../../../attribute-groups';

PType({
    name: 'Hot water dispenser',
    key: 'hotwaterdispenser',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});