import { IProductTypeCategory, IProductTypeCategoryMap, IProductTypeCategoryFlat, PTCat } from '../../abstractions';

/**
 * Categories allow us to browse available product types
 */
export const productTypeCategoryTree: IProductTypeCategoryMap = {
    clothing: PTCat('Clothing, shoes & accessories'),
    electronics: PTCat('Electronics & office', {
        homeElectronics: PTCat('Home electronics'),
        photo: PTCat('Photo & video'),
        kitchenAppliances: PTCat('Kitchen appliances'),
        largeElectricAppliances: PTCat('Large electric appliances'),
        homeCinema: PTCat('Home cinema'),
        audioHifi: PTCat('Audio & Hifi'),
    }),
    booksMedia: PTCat({ name: 'Books and movies', }),
    other: PTCat({ name: 'Other' }),
};

const flatCategories = (map: IProductTypeCategoryMap | undefined, parentKey?: string): IProductTypeCategoryFlat[] =>
    map
        ? Object.entries(map).map(([key, cat]) => [{ key, parentKey, ...cat }, ...flatCategories(cat.children, key)]).flat(1)
        : [];
export const productTypesCategoryList: IProductTypeCategoryFlat[] = flatCategories(productTypeCategoryTree);
