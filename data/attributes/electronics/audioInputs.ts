import { NumberAttr, StringAttr } from '../../../abstractions';
import { IAttributeSection } from '../../../abstractions/attribute-interfaces';

export const sectionAudioInputsAttrs = <const>{
    'electronics.audio.inputs.phono': NumberAttr({
        name: 'Phone inputs',
        description: 'Number of input connectors for turntables (stereo pairs).',
    }),
    'electronics.audio.inputs.rcaLineStereo': NumberAttr({
        name: 'RCA stereo input channels',
        description: 'Number of stereo channels, that can be connected using rca jacks (cinch female) for line level audio (stereo pairs).',
    }),
    'electronics.audio.inputs.rcaLineMono': NumberAttr({
        name: 'RCA mono inputs',
        description: 'Number of rca jacks (cinch female) for line level audio.',
    }),
    'electronics.audio.inputs.coaxialDigital': NumberAttr({
        name: 'Coaxial digital audio inputs',
        description: 'Number of digital audio inputs using coaxial (RCA style) jacks.',
    }),
    'electronics.audio.inputs.opticalDigital': NumberAttr({
        name: 'Optical digital audio inputs',
        description: 'Number of digital audio inputs using optical (TOSLINK) connectors.',
    }),
    'electronics.audio.inputs.aes3': NumberAttr({
        name: 'AES/EBU inputs',
        description: 'Number of digital audio inputs using optical AES/EBU connectors.',
    }),
    'electronics.audio.inputs.bluetoothVersion': StringAttr({
        name: 'Supported bluetooth version',
        description: 'Device can receive audio via bluetooth. Supported bluetooth version.',
    }),

};

export const sectionAudioInputs: IAttributeSection<typeof sectionAudioInputsAttrs> = {
    name: 'Audio inputs',
    key: 'audioInputs',
    description: 'Available input connectors for audio signals.',
    attributes: sectionAudioInputsAttrs
}
