
import { ag } from '../../../attribute-groups';

PType({
    name: 'Scraber',
    key: 'scraber',
    categories: ['smartHome'],
    attributeRefs: [
        ...ag.common,
    ]
});