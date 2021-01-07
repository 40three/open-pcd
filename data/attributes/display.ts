import { NumberAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionDisplayAttrs = <const>{
    'displayScreenDiagonal': NumberAttr({
        name: 'screen size',
        description: 'Screen diagonal',
        unit: 'cm',
    }),
    'displayResolutionHorizontal': NumberAttr({
        name: 'resolution (horizontal)',
        description: 'Number of horizontal pixels. E.g. 1920 (full hd)',
    }),
    'displayResolutionVertical': NumberAttr({
        name: 'resolution (vertical)',
        description: 'Number of vertical pixels. E.g. 1080 (full hd)',
    })
};

export const sectionDisplay: IAttributeSection<typeof sectionDisplayAttrs> = {
    name: 'Display',
    key: 'display',
    description: 'Display used in TVs, Smartphones, Computers, ...',
    attributes: sectionDisplayAttrs
}
