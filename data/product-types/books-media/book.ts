import { ag } from '../../attribute-groups';

PType({
    name: 'book',
    key: 'book',
    definitionUrl: 'https://en.wikipedia.org/wiki/Book',
    categories: ['booksMedia'],
    subTypes: {
        'travel': PSub({
            name: 'travel',
            addAttributeRefs: ['content.country']
        }),
    },
    attributeRefs: [
        ...ag.common,
        'content.genre',
        'content.author',
        'content.title',
        'content.subtitle',
        'content.fontSize',
    ]
});
