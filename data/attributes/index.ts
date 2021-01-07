import { sectionAudience, sectionAudienceAttrs } from './audience';
import { sectionCommon, sectionCommonAttrs } from './common';
import { sectionContent, sectionContentAttrs } from './content';
import { sectionDescription, sectionDescriptionAttrs } from './description';
import { sectionDimensionsPackaging, sectionDimensionsPackagingAttrs } from './dimensions-packaging';
import { sectionDisplay, sectionDisplayAttrs } from './display';
import { sectionFashion, sectionFashionAttrs } from './fashion';
import { sectionMaterial, sectionMaterialAttrs } from './material';
import { sectionMedia, sectionMediaAttrs } from './media';
import { sectionPowerSupply, sectionPowerSupplyAttrs } from './power-supply-energy';
import { sectionPriceAvailability, sectionPriceAvailabilityAttrs } from './price-availability';

/** Dictionary of all available attribute */
export const a = {
    ...sectionAudienceAttrs,
    ...sectionCommonAttrs,
    ...sectionContentAttrs,
    ...sectionDescriptionAttrs,
    ...sectionDisplayAttrs,
    ...sectionDimensionsPackagingAttrs,
    ...sectionFashionAttrs,
    ...sectionMaterialAttrs,
    ...sectionMediaAttrs,
    ...sectionPowerSupplyAttrs,
    ...sectionPriceAvailabilityAttrs,
};

/** All allowed attribute keys */
export type AttributeKey = keyof typeof a;

/** ORDERED list of all available sections */
export const attributeSections = [
    sectionCommon,
    sectionDescription,
    sectionDimensionsPackaging,
    sectionPriceAvailability,
    sectionMedia,
    // specific sets
    sectionFashion,
    sectionMaterial,
    sectionContent,
    sectionAudience,
    sectionDisplay,
    sectionPowerSupply,
];
