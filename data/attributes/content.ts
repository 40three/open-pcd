/**
 * Text, audio and video content attributes
 */
import { NumberAttr, SetAttr, StringAttr } from '../../abstractions';
import { IAttributeGroup } from '../../abstractions/attribute-interfaces';

export const contentSectionAttributes = <const>{
    title: StringAttr({
        name: 'title',
        description: 'Product title without author or other additions.'
    }),
    subtitle: StringAttr({
        name: 'Subtitle',
        description: 'Product title without author or other additions.'
    }),
    language: SetAttr({
        name: 'language',
        description: 'Text, audio or video language',
        values: ['de', 'en'] as const,
    }),
    fontSize: NumberAttr({
        name: 'font size',
        description: 'Size of font used for most of text content.',
        unit: 'pt',
    })
};

export const attributeGroupContent: IAttributeGroup<typeof contentSectionAttributes> = {
    name: 'Content',
    key: 'content',
    description: 'Text, audio and video content description.',
    attributes: contentSectionAttributes
}
