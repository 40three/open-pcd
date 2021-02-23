import { IAttributeSection } from '../../../abstractions/attribute-interfaces';

export const sectionDisplayAttrs = <const>{
    'electronics.display.hasDisplay': BooleanAttr({
        name: 'Has display',
        description: 'True if device has a display.',
    }),
    'electronics.display.screenDiagonal': NumberAttr({
        name: 'screen size',
        description: 'Screen diagonal',
        unit: 'cm',
    }),
    'electronics.display.resolutionHorizontal': NumberAttr({
        name: 'resolution (horizontal)',
        description: 'Number of horizontal pixels. E.g. 1920 (full hd)',
    }),
    'electronics.display.resolutionVertical': NumberAttr({
        name: 'resolution (vertical)',
        description: 'Number of vertical pixels. E.g. 1080 (full hd)',
    }),
};

export const sectionDisplay: IAttributeSection<typeof sectionDisplayAttrs> = {
    name: 'Display',
    key: 'display',
    description: 'Display used in TVs, Smartphones, Computers, ...',
    attributes: sectionDisplayAttrs
}
