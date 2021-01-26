import { NumberAttr, StringAttr } from '../../../abstractions';
import { IAttributeSection } from '../../../abstractions/attribute-interfaces';

export const sectionAudioOutputsAttrs = <const>{
    'electronics.audio.outputs.rcaLineStereo': NumberAttr({
        name: 'RCA stereo outputs (pairs)',
        description: 'Number of stereo outputs, that can be connected using rca jacks (cinch female) for line level audio (stereo pairs).',
    }),
    'electronics.audio.outputs.rcaLineMono': NumberAttr({
        name: 'RCA mono outputs',
        description: 'Number of rca jacks (cinch female) for line level audio.',
    }),
    'electronics.audio.outputs.coaxialDigital': NumberAttr({
        name: 'Coaxial digital audio outputs',
        description: 'Number of digital audio outputs using coaxial (RCA style) jacks.',
    }),
    'electronics.audio.outputs.opticalDigital': NumberAttr({
        name: 'Optical digital audio outputs',
        description: 'Number of digital audio outputs using optical (TOSLINK) connectors.',
    }),
    'electronics.audio.outputs.aes3': NumberAttr({
        name: 'AES/EBU outputs',
        description: 'Number of digital audio outputs using optical AES/EBU connectors.',
    }),
    'electronics.audio.outputs.bluetoothVersion': StringAttr({
        name: 'Supported bluetooth version',
        description: 'Device can send audio via bluetooth. Supported bluetooth version.',
    }),

};

export const sectionAudioOutputs: IAttributeSection<typeof sectionAudioOutputsAttrs> = {
    name: 'Audio inputs',
    key: 'audioInputs',
    description: 'Available input connectors for audio signals.',
    attributes: sectionAudioOutputsAttrs
}
