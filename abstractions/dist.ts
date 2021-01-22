// DIST types
// that's how the published data looks like
// We merge translations and move keys to the object itself.

import { SupportedCultureKey } from '../cli/configuration';
import { AttributeKey } from '../data/attributes';
import { ProductTypeCategoryKey } from '../data/generated/types';
import { UnitKey } from '../data/units';
import { AttributeType } from './attribute-interfaces';

export type MultiLanguageText = Record<SupportedCultureKey, string>;

/** Attribute section in published data */
export interface IDistAttributeSection {
    readonly name: MultiLanguageText;
    readonly key: string;
    readonly description?: MultiLanguageText;
    readonly attributes: IDistAttribute[];
}

/** Attribute in published data */
export interface IDistAttribute {
    readonly name: MultiLanguageText;
    readonly key: string;
    readonly description?: MultiLanguageText;
    readonly type: AttributeType;
    readonly unit?: UnitKey;
    readonly values?: readonly any[];
    readonly allowCustomValues?: boolean;
}

export interface IDistProductType {
    readonly name: MultiLanguageText;
    readonly key: string;
    readonly categories: readonly ProductTypeCategoryKey[];
    readonly description?: MultiLanguageText;
    /** URL of document describing what products of this type are */
    readonly definitionUrl?: string;
    readonly subTypes?: IDistProductSubType[];
    readonly attributeRefs: AttributeKey[];
}

export interface IDistProductSubType {
    readonly name: MultiLanguageText;
    readonly key: string;
    readonly categories?: readonly ProductTypeCategoryKey[];
    readonly addAttributeRefs?: AttributeKey[];
}