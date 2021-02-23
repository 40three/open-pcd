
import { ag } from '../../../attribute-groups';

export const productTypeMediaStreamingClient = PType({
    name: 'Media streaming client',
    key: 'mediastreaingclient',
    categories: ['homeCinema'],
    attributeRefs: [
        ...ag.common,
    ]
});