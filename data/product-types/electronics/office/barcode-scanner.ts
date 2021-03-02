
import { ag } from '../../../attribute-groups';

PType({
    name: 'Barcode scanner',
    key: 'barcodescanner',
    categories: ['officeElectronics'],
    attributeRefs: [
        ...ag.common,
    ]
});