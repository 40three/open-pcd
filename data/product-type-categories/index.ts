import { IProductTypeCategoryMap, PTCat } from '../../abstractions';

/**
 * Categories allow us to browse available product types
 */
export const productTypeCategoryTree: IProductTypeCategoryMap = {
    clothing: PTCat('clothing, shoes and accessories'),
    electronics: PTCat('electronics and office', {
        homeElectronics: PTCat('home electronics'),
    }),
    booksMedia: PTCat({ name: 'books and movies', }),
};
