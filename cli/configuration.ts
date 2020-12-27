/** Available cultures without en-US (which is the original data) */
export const translations = <const>['de'];
export type TranslationCultureKey = typeof translations[number];
export type SupportedCultureKey = TranslationCultureKey | 'en-US';

/** Base name for files by object type */
export const objectFiles = <const>['attributes', 'attribute-sections', 'product-type-categories', 'product-types'];
export type ObjectFileName = typeof objectFiles[number];

// directories
export const translationsBasePath = 'omega-t/target';