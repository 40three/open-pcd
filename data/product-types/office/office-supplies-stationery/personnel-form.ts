
import { ag } from '../../../attribute-groups';

PType({
    name: 'Personnel form',
    key: 'personnel form',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});