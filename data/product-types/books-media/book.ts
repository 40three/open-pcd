import { ag } from '../../attribute-groups';
import { PSub, PType } from '../../../abstractions';

export const productTypeBook = PType({
    name: 'book',
    key: 'book',
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
