
import { PType } from '../../../../abstractions';
import { ag } from '../../../attribute-groups';

export const productTypeExtractorHood = PType({
    name: 'Extractor hood',
    key: 'extractorhood',
    categories: ['largeElectricAppliances'],
    attributeRefs: [
        ...ag.common,
    ]
});