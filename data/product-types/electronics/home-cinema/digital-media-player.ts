
import { ag } from '../../../attribute-groups';

PType({
    name: 'Digital media player',
    key: 'digitalMediaPlayer',
    definitionUrl: 'https://en.wikipedia.org/wiki/Digital_media_player',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});