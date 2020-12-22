// DIST types
// that's how the published data looks like

import { AttributeType } from './attribute-interfaces';
import { SupportedCultureKey } from '../cli/configuration';
import { UnitKey } from '../data/units';

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
    readonly description?: MultiLanguageText;
    readonly type: AttributeType;
    readonly unit?: UnitKey;
    readonly values?: readonly any[];
    readonly allowCustomValues?: boolean;
}
