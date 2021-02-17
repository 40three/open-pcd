import { sectionAudience, sectionAudienceAttrs } from './audience';
import { sectionCommon, sectionCommonAttrs } from './common';
import { sectionContent, sectionContentAttrs } from './content';
import { sectionDescription, sectionDescriptionAttrs } from './description';
import { sectionDimensionsPackaging, sectionDimensionsPackagingAttrs } from './dimensions-packaging';
import { sectionDisplay, sectionDisplayAttrs } from './electronics/display';
import { sectionFashion, sectionFashionAttrs } from './fashion';
import { sectionMaterial, sectionMaterialAttrs } from './material';
import { sectionMedia, sectionMediaAttrs } from './media';
import { sectionPowerSupply, sectionPowerSupplyAttrs } from './electronics/power-supply-energy';
import { sectionPriceAvailability, sectionPriceAvailabilityAttrs } from './price-availability';
import { sectionAudioInputs, sectionAudioInputsAttrs } from './electronics/audioInputs';
import { sectionAudioOutputs, sectionAudioOutputsAttrs } from './electronics/audioOutputs';
import { sectionCamera, sectionCameraAttrs } from './electronics/camera';
import { sectionMicrophone, sectionMicrophoneAttrs } from './electronics/microphone';

/** Dictionary of all available attribute */
export const a = {
    ...sectionAudienceAttrs,
    ...sectionAudioInputsAttrs,
    ...sectionAudioOutputsAttrs,
    ...sectionCameraAttrs,
    ...sectionCommonAttrs,
    ...sectionContentAttrs,
    ...sectionDescriptionAttrs,
    ...sectionDisplayAttrs,
    ...sectionDimensionsPackagingAttrs,
    ...sectionFashionAttrs,
    ...sectionMaterialAttrs,
    ...sectionMicrophoneAttrs,
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
    sectionCamera,
    sectionContent,
    sectionAudience,
    sectionAudioInputs,
    sectionAudioOutputs,
    sectionDisplay,
    sectionMicrophone,
    sectionPowerSupply,
];
