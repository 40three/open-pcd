
import { ag } from '../../attribute-groups';

PType({
    name: 'Adhesive tape',
    key: 'adhesivetape',
    categories: ['drugstore'],
    attributeRefs: [
        ...ag.common,
    ]
});