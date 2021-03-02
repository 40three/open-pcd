
import { ag } from '../../../attribute-groups';

PType({
    name: 'Folder',
    key: 'folder',
    categories: ['officeSupplies'],
    attributeRefs: [
        ...ag.common,
    ]
});