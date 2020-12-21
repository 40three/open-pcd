import { sectionCommon, sectionCommonAttrs } from './common';
import { sectionContent, sectionContentAttrs } from './content';
import { sectionDimensionsPackaging, sectionDimensionsPackagingAttrs } from './dimensions-packaging';
import { sectionDisplay, sectionDisplayAttrs } from './display';

/** Dictionary of all available attribute */
export const a = {
    ...sectionCommonAttrs,
    ...sectionContentAttrs,
    ...sectionDisplayAttrs,
    ...sectionDimensionsPackagingAttrs,
};

/** All allowed attribute keys */
export type AttributeKey = keyof typeof a;

/** Dictionary of all available sections */
export const attributeSections = [
    sectionCommon,
    sectionContent,
    sectionDimensionsPackaging,
    sectionDisplay,
];
