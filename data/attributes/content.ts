/**
 * Text, audio and video content attributes
 */
import { NumberAttr, SetAttr, StringAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionContentAttrs = <const>{
    'content.title': StringAttr({
        name: 'title',
        description: 'Product title without author or other additions.'
    }),
    'content.subtitle': StringAttr({
        name: 'subtitle',
        description: 'Product title without author or other additions.'
    }),
    'content.author': StringAttr({
        name: 'author',
        description: 'Content author.',
        definitionUrl: 'https://en.wikipedia.org/wiki/Author',
    }),
    'content.translators': StringAttr({
        name: 'translators (person)',
        description: 'Name of translator(s)',
    }),
    'content.language': SetAttr({
        name: 'language',
        description: 'Text, audio or video language',
        values: ['de', 'en'] as const,
    }),
    'content.fontSize': NumberAttr({
        name: 'font size',
        description: 'Size of font used for most of text content.',
        unit: 'pt',
    }),
    'content.country': StringAttr({
        name: 'country',
        description: 'Name of country that this content is about.',
    }),
    'content.genre': SetAttr({
        name: 'genre (book)',
        values: ['biography', 'business', 'cooking', 'history', 'pets', 'politics', 'philosophy', 'religion', 'sports'],
        allowCustomValues: true,
    }),
};

export const sectionContent: IAttributeSection<typeof sectionContentAttrs> = {
    name: 'Content',
    key: 'content',
    description: 'Text, audio and video content description.',
    attributes: sectionContentAttrs
}
