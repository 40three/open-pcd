/** Available cultures without en-US (which is the original data) */
export const translations = <const>['de'];
export type TranslationCultureKey = typeof translations[number];

/** Base name for files by object type */
export type ObjectFileName = 'attributes' | 'attribute-sections' | 'product-type-categories' | 'product-types';

// directories
export const translationsBasePath = 'data/generated/translations';