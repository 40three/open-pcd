import { ag } from '../attribute-groups';

export const simpleProduct = PType({
    name: 'simple product',
    description: 'Product with a basic set of describing attributes.',
    key: 'simpleProduct',
    categories: ['other'],
    attributeRefs: [
        ...ag.common,
        'audience.gender',
    ]
});
