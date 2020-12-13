import { StringAttr } from '../../abstractions';
import { IAttributeGroup } from '../../abstractions/attribute-interfaces';

export const commonGroupAttributes = <const>{
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

export const attributeGroupCommon: IAttributeGroup<typeof commonGroupAttributes> = {
    name: 'Common',
    key: 'common',
    description: 'Standard attributes to identify products',
    attributes: commonGroupAttributes
};
