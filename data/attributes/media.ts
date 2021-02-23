
export const sectionMediaAttrs = <const>{
    'product.images': FilesAttr({
        name: 'images',
        description: 'Product images. Primary image as first item.',
    }),
};

export const sectionMedia: IAttributeSection<typeof sectionMediaAttrs> = {
    name: 'Media',
    key: 'media',
    attributes: sectionMediaAttrs
};
