PType({
    name: 'Simple product',
    description: 'Product with a basic set of describing attributes.',
    key: 'simpleProduct',
    categories: ['other'],
    attributeRefs: [
        ...ag.common,
        'audience.gender',
    ]
});