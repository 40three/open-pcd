import { ag } from 'attribute-groups';
import { PSub, PType } from '../../../abstractions';

export const productTypeBook = PType({
    name: 'book',
    key: 'book',
    categories: ['booksMedia'],
    subTypes: {
        'biography': PSub('biography and memoir'),
        'business': PSub('business'),
        'cooking': PSub('cooking'),
        'history': PSub('history'),
        'pets': PSub('pets'),
        'politics': PSub('politics'),
        'philosophy': PSub('philosophy'),
        'religion': PSub('religion'),
        'sports': PSub('sports'),
        'travel': PSub('travel'),
    },
    attributeRefs: [
        ...ag.common,
        'author',
        'title',
        'subtitle',
        'fontSize'
    ]
});
