import { NumberAttr } from '../../abstractions';
import { IAttributeSection } from '../../abstractions/attribute-interfaces';

export const sectionDisplayAttrs = <const>{
    'screen-diagonal': NumberAttr({
        name: 'screen size',
        description: 'Screen diagonal',
    })
};

export const sectionDisplay: IAttributeSection<typeof sectionDisplayAttrs> = {
    name: 'Display',
    key: 'display',
    description: 'Display used in TVs, Smartphones, Computers, ...',
    attributes: sectionDisplayAttrs
}
