import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionMaterialAttrs = <const>{
    'product.color': StringAttr({
        name: 'color',
        description: 'Primary color.'
    }),
    'material.type': StringAttr({
        name: 'material',
        description: 'What\'s this product is made of. E.g. leather, polyester, ...',
    }),
    'pattern': StringAttr({
        name: 'pattern or design',
        description: 'Pattern or graphic print.',
    }),
};

export const sectionMaterial: IAttributeSection<typeof sectionMaterialAttrs> = {
    name: 'material',
    key: 'material',
    attributes: sectionMaterialAttrs
};
