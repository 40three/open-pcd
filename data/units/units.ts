import { Unit } from '../../abstractions';

/** Supported units with descriptions */
export const u = {
    'mm': Unit({ name: 'millimeter' }),
    'cm': Unit({ name: 'Centimeter' }),
    'm': Unit({ name: 'meter' }),
    'gr': Unit({ name: 'gram' }),
    'px': Unit({ name: 'pixel' }),
    'pt': Unit({ name: 'point', description: 'Point (typography)', reference: 'https://en.wikipedia.org/wiki/Point_(typography)' }),
    'kg': Unit({ name: 'kilogram' }),
    'V': Unit({ name: 'volt' }),
};
