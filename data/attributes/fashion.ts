import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionFashionAttrs = <const>{
    'fashion.size': StringAttr({
        name: 'size',
        description: 'Clothing an shoes, e.g. "XL".'
    }),
    'fashion.cut': SetAttr({
        name: 'cut',
        values: ['regular', 'petite', 'oversize', 'maternity'],
    }),
};

export const sectionFashion: IAttributeSection<typeof sectionFashionAttrs> = {
    name: 'fashion',
    key: 'fashion',
    attributes: sectionFashionAttrs
};
