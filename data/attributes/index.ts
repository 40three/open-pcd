import { attributeGroupCommon, commonGroupAttributes } from './common';
import { attributeGroupDimensionsPackaging, dimensionsPackagingGroupAttributes } from './dimensions-packaging';
import { attributeGroupDisplay, displaySectionAttributes } from './display';

/** Dictionary of all available attribute */
export const a = {
    ...commonGroupAttributes,
    ...displaySectionAttributes,
    ...dimensionsPackagingGroupAttributes,
};

/** All allowed attribute keys */
export type AttributeKey = keyof typeof a;

/** Dictionary of all available sections */
export const s = [
    attributeGroupCommon,
    attributeGroupDimensionsPackaging,
    attributeGroupDisplay,
];
