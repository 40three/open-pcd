import { Unit } from '../../abstractions';

/** Supported units with descriptions */
export const u = {
    // length (metric)
    'mm': Unit({ name: 'millimeter' }),
    'cm': Unit({ name: 'centimeter' }),
    'm': Unit({ name: 'meter' }),

    // length (imperial)
    'in': Unit({ name: 'inch' }),
    'ft': Unit({ name: 'foot' }),

    // weight (metric)
    'mg': Unit({ name: 'milligram' }),
    'gr': Unit({ name: 'gram' }),
    'kg': Unit({ name: 'kilogram' }),

    // volume (metric)
    'ml': Unit({ name: 'milliliter' }),
    'l': Unit({ name: 'liter' }),
    'cbm': Unit({ name: 'cubic meter' }),

    // date and time
    'yr': Unit({ name: 'year', alternativeKeys: ['a', 'y'] }),

    // misc
    'px': Unit({ name: 'pixel' }),
    'pt': Unit({ name: 'point', description: 'Point (typography)', reference: 'https://en.wikipedia.org/wiki/Point_(typography)' }),
    'V': Unit({ name: 'volt' }),
    'A': Unit({ name: 'ampere' }),
    'W': Unit({ name: 'watt' }),
    'Ah': Unit({ name: 'amp hours' }),
};
