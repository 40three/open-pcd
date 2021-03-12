
import { ag } from '../../attribute-groups';

PType({
    name: 'Upholstered stool',
    key: 'upholsteredstool',
    categories: ['furniture'],
    attributeRefs: [
        ...ag.common,
    ]
});