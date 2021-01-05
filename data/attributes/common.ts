import { StringAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionCommonAttrs = <const>{
    'sku': StringAttr({
        name: 'stock keeping unit',
        description: 'Unique stock keeping unit.'
    }),
    'mpn': StringAttr({
        name: 'manufacturer part number',
        description: 'Manufacturer unique article number.'
    }),
    'gtin': StringAttr({
        name: 'GTIN',
        description: 'Includes UPC, EAN, ISBN and other global identifiers.',
    }),
    'name': StringAttr({
        name: 'product name'
    }),
    'brand': StringAttr({
        name: 'brand'
    })
};

export const sectionCommon: IAttributeSection<typeof sectionCommonAttrs> = {
    name: 'Common',
    key: 'common',
    description: 'Standard attributes to identify products',
    attributes: sectionCommonAttrs
};
