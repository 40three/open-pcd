import { ag } from '../../attribute-groups';
import { PSub, PType } from '../../../abstractions';

export const productTypeBook = PType({
    name: 'book',
    key: 'book',
    definitionUri: 'https://en.wikipedia.org/wiki/Book',
    categories: ['booksMedia'],
    subTypes: {
        'travel': PSub({
            name: 'travel',
            addAttributeRefs: ['country']
        }),
    },
    attributeRefs: [
        ...ag.common,
        'bookGenre',
        'author',
        'title',
        'subtitle',
        'fontSize'
    ]
});
