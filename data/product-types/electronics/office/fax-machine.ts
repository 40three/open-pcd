
import { ag } from '../../../attribute-groups';

PType({
    name: 'Fax machine',
    key: 'faxmachine',
    categories: ['officeElectronics'],
    attributeRefs: [
        ...ag.common,
    ]
});