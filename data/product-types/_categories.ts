import { PTCat } from '../../abstractions';

/**
 * Categories allow us to browse available product types
 */
export const productTypeCategoryTree = <const>{
    clothing: PTCat({ name: 'clothing, shoes and accessories', }),
    electronics: PTCat({ name: 'electronics and office' }),
    booksMedia: PTCat({ name: 'books and movies', }),
};

export type ProducTypeCategory = keyof typeof productTypeCategoryTree;
