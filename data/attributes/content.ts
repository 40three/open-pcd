/**
 * Text, audio and video content attributes
 */
import { BooleanAttr, NumberAttr, SetAttr, StringAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionContentAttrs = <const>{
    title: StringAttr({
        name: 'title',
        description: 'Product title without author or other additions.'
    }),
    subtitle: StringAttr({
        name: 'subtitle',
        description: 'Product title without author or other additions.'
    }),
    author: StringAttr({
        name: 'author',
        description: 'Content author.'
    }),
    translators: StringAttr({
        name: 'translators (person)',
        description: 'Name of translator(s)'
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
    }),
    country: StringAttr({
        name: 'country',
        description: 'Name of country that this content is about.',
    }),
    bookGenre: SetAttr({
        name: 'genre (book)',
        values: ['biography', 'business', 'cooking', 'history', 'pets', 'politics', 'philosophy', 'religion', 'sports'],
        allowCustomValues: true,
    }),
    adultContent: BooleanAttr({
        name: 'adult content',
        description: 'Enable, if content is intended for adults only, e.g. nudity or secually suggestive content.',
    })
};

export const sectionContent: IAttributeSection<typeof sectionContentAttrs> = {
    name: 'Content',
    key: 'content',
    description: 'Text, audio and video content description.',
    attributes: sectionContentAttrs
}
