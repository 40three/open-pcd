import { IProductTypeCategory, IProductTypeCategoryMap, IProductTypeCategoryFlat, PTCat } from '../../abstractions';

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

const flatCategories = (map: IProductTypeCategoryMap): IProductTypeCategoryFlat[] => Object.entries(map).map(([key, cat]) => [{ key, ...cat}, ...flatCategories(cat.children)]).flat(1);
export const productTypesCategoryList: IProductTypeCategoryFlat[] = flatCategories(productTypeCategoryTree);
