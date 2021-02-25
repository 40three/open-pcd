

export const sectionCommonAttrs = <const>{
    'product.sku': StringAttr({
        name: 'stock keeping unit',
        description: 'Unique stock keeping unit.'
    }),
    'articleNumber': StringAttr({
        name: 'article number',
        description: 'Must be the same for all product variants.'
    }),
    'product.mpn': StringAttr({
        name: 'manufacturer part number',
        description: 'Manufacturer unique article number.'
    }),
    'product.gtin': StringAttr({
        name: 'GTIN',
        description: 'Includes UPC, EAN, ISBN and other global identifiers.',
    }),
    'product.name': StringAttr({
        name: 'product name'
    }),
    'product.brand': StringAttr({
        name: 'brand'
    })
};

export const sectionCommon: IAttributeSection<typeof sectionCommonAttrs> = {
    name: 'Common',
    key: 'common',
    description: 'Standard attributes to identify products',
    attributes: sectionCommonAttrs
};
