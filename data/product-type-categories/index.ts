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
    other: PTCat({ name: 'other' }),
};

const flatCategories = (map: IProductTypeCategoryMap | undefined, parentKey?: string): IProductTypeCategoryFlat[] =>
    map
        ? Object.entries(map).map(([key, cat]) => [{ key, parentKey, ...cat }, ...flatCategories(cat.children, key)]).flat(1)
        : [];
export const productTypesCategoryList: IProductTypeCategoryFlat[] = flatCategories(productTypeCategoryTree);
