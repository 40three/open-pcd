import { sectionCommon, sectionCommonAttrs } from './common';
import { sectionContent, sectionContentAttrs } from './content';
import { sectionDescription, sectionDescriptionAttrs } from './description';
import { sectionDimensionsPackaging, sectionDimensionsPackagingAttrs } from './dimensions-packaging';
import { sectionDisplay, sectionDisplayAttrs } from './display';
import { sectionMedia, sectionMediaAttrs } from './media';
import { sectionPriceAvailability, sectionPriceAvailabilityAttrs } from './price-availability';

/** Dictionary of all available attribute */
export const a = {
    ...sectionCommonAttrs,
    ...sectionContentAttrs,
    ...sectionDescriptionAttrs,
    ...sectionDisplayAttrs,
    ...sectionDimensionsPackagingAttrs,
    ...sectionMediaAttrs,
    ...sectionPriceAvailabilityAttrs,
};

/** All allowed attribute keys */
export type AttributeKey = keyof typeof a;

/** Dictionary of all available sections */
export const attributeSections = [
    sectionCommon,
    sectionContent,
    sectionDescription,
    sectionDimensionsPackaging,
    sectionDisplay,
    sectionMedia,
    sectionPriceAvailability,
];
