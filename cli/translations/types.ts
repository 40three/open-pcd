/** Big nested dict with all tranlsations. Structure: culture: object-type: key: translation */
export type AllTranslationsDict = Record<string, Record<string, Record<string, string>>>;