import { BooleanAttr, NumberAttr, SetAttr } from '../../../abstractions';
import { IAttributeSection } from '../../../abstractions/attribute-interfaces';

export const sectionMicrophoneAttrs = <const>{
    'electronics.mic.hasMicrophone': BooleanAttr({
        name: 'Has microphone',
        description: 'True if device has a microphone.',
    }),
    'electronics.mic.channels': SetAttr({
        name: 'Microphone channels',
        values: ['mono', 'stereo'],
        defaultValue: 'mono',
    }),
};

export const sectionMicrophone: IAttributeSection<typeof sectionMicrophoneAttrs> = {
    name: 'Microphone',
    key: 'microphone',
    definitionUrl: 'https://en.wikipedia.org/wiki/Microphone',
    attributes: sectionMicrophoneAttrs
}
