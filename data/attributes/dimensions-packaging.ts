import { NumberAttr, StringAttr } from '../../abstractions';
import { IAttributeGroup } from '../../abstractions/attribute-interfaces';

export const dimensionsPackagingGroupAttributes = <const>{
    'width': NumberAttr({ // schema.org product
        name: 'Width',
        description: 'Width of product without packaging.',
        unit: 'cm',
    }),
    'height': NumberAttr({ // schema.org product
        name: 'height',
        description: 'Height of product without packaging.',
        unit: 'cm',
    }),
    'depth': NumberAttr({ // schema.org product
        name: 'depth',
        description: 'Depth of product without packaging.',
        unit: 'cm',
    }),
    'weight': NumberAttr({ // schema.org product
        name: 'Width',
        description: 'Weight of product without packaging.',
        unit: 'kg',
    }),
};

export const attributeGroupDimensionsPackaging: IAttributeGroup<typeof dimensionsPackagingGroupAttributes> = {
    name: 'dimensions an packaging',
    key: 'dimensionsPackaging',
    attributes: dimensionsPackagingGroupAttributes
};
