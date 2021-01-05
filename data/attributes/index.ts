import { sectionCommon, sectionCommonAttrs } from './common';
import { sectionContent, sectionContentAttrs } from './content';
import { sectionDimensionsPackaging, sectionDimensionsPackagingAttrs } from './dimensions-packaging';
import { sectionDisplay, sectionDisplayAttrs } from './display';
import { sectionMedia, sectionMediaAttrs } from './media';

/** Dictionary of all available attribute */
export const a = {
    ...sectionCommonAttrs,
    ...sectionContentAttrs,
    ...sectionDisplayAttrs,
    ...sectionDimensionsPackagingAttrs,
    ...sectionMediaAttrs,
};

/** All allowed attribute keys */
export type AttributeKey = keyof typeof a;

/** Dictionary of all available sections */
export const attributeSections = [
    sectionCommon,
    sectionContent,
    sectionDimensionsPackaging,
    sectionDisplay,
    sectionMedia,
];
