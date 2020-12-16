import { attributeGroupCommon, commonGroupAttributes } from './common';
import { attributeGroupContent, contentSectionAttributes } from './content';
import { attributeGroupDimensionsPackaging, dimensionsPackagingGroupAttributes } from './dimensions-packaging';
import { attributeGroupDisplay, displaySectionAttributes } from './display';

/** Dictionary of all available attribute */
export const a = {
    ...commonGroupAttributes,
    ...contentSectionAttributes,
    ...displaySectionAttributes,
    ...dimensionsPackagingGroupAttributes,
};

/** All allowed attribute keys */
export type AttributeKey = keyof typeof a;

/** Dictionary of all available sections */
export const g = [
    attributeGroupCommon,
    attributeGroupContent,
    attributeGroupDimensionsPackaging,
    attributeGroupDisplay,
];
