import { NumberAttr, SetAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';
import { vPackagingType } from '../values/package-type';

export const sectionDimensionsPackagingAttrs = <const>{
    'width': NumberAttr({
        name: 'width',
        description: 'Width of product without packaging.',
        unit: 'cm',
    }),
    'height': NumberAttr({
        name: 'height',
        description: 'Height of product without packaging.',
        unit: 'cm',
    }),
    'depth': NumberAttr({
        name: 'depth',
        description: 'Depth of product without packaging.',
        unit: 'cm',
    }),
    'weight': NumberAttr({
        name: 'width',
        description: 'Weight of product without packaging.',
        unit: 'kg',
    }),
    'itemsPerUnit': NumberAttr({
        name: 'items per unit',
        description: 'Number of items you get, if you order one unit. E.g. for a pack of 6 bottles: 6'
    }),
    'packaging.typePrimary': SetAttr({
        name: 'package type (item)',
        description: 'Packaging of item(s).',
        definitionUrl: 'https://en.wikipedia.org/wiki/Packaging_and_labeling#Packaging_types',
        values: vPackagingType,
    }),
    'packaging.typeSecondary': SetAttr({
        name: 'package type (secondary)',
        description: 'Secondary packaging, e.g. to group items together.',
        definitionUrl: 'https://en.wikipedia.org/wiki/Packaging_and_labeling#Packaging_types',
        values: vPackagingType,
    }),
    'packaging.typeTransit': SetAttr({
        name: 'package type (transit)',
        description: 'Additional packaging for easier transport. E.g. "pallet".',
        definitionUrl: 'https://en.wikipedia.org/wiki/Packaging_and_labeling#Packaging_types',
        values: vPackagingType,
    }),
};

export const sectionDimensionsPackaging: IAttributeSection<typeof sectionDimensionsPackagingAttrs> = {
    name: 'dimensions & packaging',
    key: 'dimensionsPackaging',
    attributes: sectionDimensionsPackagingAttrs
};
