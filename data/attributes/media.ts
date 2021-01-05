import { FilesAttr, IAttributeSection } from '../../abstractions';

export const sectionMediaAttrs = <const>{
    images: FilesAttr({
        name: 'Images',
        description: 'Product images. Primary image as first item.',
    }),
};

export const sectionMedia: IAttributeSection<typeof sectionMediaAttrs> = {
    name: 'Media',
    key: 'media',
    attributes: sectionMediaAttrs
};
