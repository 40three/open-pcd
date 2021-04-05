
import { s } from '../../generated';

PType({
    name: 'Camera (photo)',
    key: 'camera',
    definitionUrl: 'https://en.wikipedia.org/wiki/Camera',
    categories: ['photo'],
    subTypes: {
        'actionCamera': PSub({
            name: 'Action camera (digital)',
            definitionUrl: 'https://en.wikipedia.org/wiki/Action_camera',
        }),
        'analog': PSub({
            name: 'Analog camera',
        }),
        'pointAndShoot': PSub({
            name: 'Point-and-shoot camera (digital)',
            definitionUrl: 'https://en.wikipedia.org/wiki/Point-and-shoot_camera',
        }),
        'dslr': PSub({
            name: 'DSLR camera (digital single-lens)',
            description: 'Digital single-lens reflex camera with interchangeable lense.',
            definitionUrl: 'https://en.wikipedia.org/wiki/Digital_single-lens_reflex_camera',
        })
    },
    defaultValues: {
        'camera.hasCamera': true,
    },
    attributeRefs: [
        ...ag.common,
        ...s.camera,
        'electronics.batteriesIncluded',
        'electronics.batteriesRequired',
        'electronics.batteryCapacity',
        'electronics.batteryTechnology',
        'electronics.mic.hasMicrophone',
        'electronics.mic.channels',
    ]
});
