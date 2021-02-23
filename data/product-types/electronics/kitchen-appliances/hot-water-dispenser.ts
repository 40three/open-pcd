
import { ag } from '../../../attribute-groups';

export const productTypeHotWaterDispenser = PType({
    name: 'Hot water dispenser',
    key: 'hotwaterdispenser',
    categories: ['kitchenAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});