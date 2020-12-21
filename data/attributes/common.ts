import { StringAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionCommonAttrs = <const>{
    'sku': StringAttr({ // schema.org product
        name: 'Stock keeping unit',
        description: 'Unique stock keeping unit.'
    }),
    'mpn': StringAttr({ // schema.org product
        name: 'Manufacturer part number',
        description: 'Manufacturer unique article number.'
    }),
    'gtin': StringAttr({ // schema.org product
        name: 'GTIN',
        description: 'Includes UPC, EAN, ISBN and other global identifiers.',
    }),
    'name': StringAttr({ // schema.org product
        name: 'Product name'
    }),
    'brand': StringAttr({ // schema.org product
        name: 'brand'
    })
};

export const sectionCommon: IAttributeSection<typeof sectionCommonAttrs> = {
    name: 'Common',
    key: 'common',
    description: 'Standard attributes to identify products',
    attributes: sectionCommonAttrs
};
