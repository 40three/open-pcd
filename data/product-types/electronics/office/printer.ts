
import { ag } from '../../../attribute-groups';

PType({
    name: 'Printer',
    key: 'printer',
    categories: ['officeElectronics'],
    attributeRefs: [
        ...ag.common,
    ]
});