import { NumberAttr, StringAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionDimensionsPackagingAttrs = <const>{
    'width': NumberAttr({ // schema.org product
        name: 'width',
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

export const sectionDimensionsPackaging: IAttributeSection<typeof sectionDimensionsPackagingAttrs> = {
    name: 'dimensions an packaging',
    key: 'dimensionsPackaging',
    attributes: sectionDimensionsPackagingAttrs
};
