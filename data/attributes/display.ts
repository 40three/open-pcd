import { NumberAttr } from '../../abstractions';
import { IAttributeGroup } from '../../abstractions/attribute-interfaces';

export const displaySectionAttributes = <const>{
    'screen-diagonal': NumberAttr({
        name: 'Screen size',
        description: 'Screen diagonal',
    })
};

export const attributeGroupDisplay: IAttributeGroup<typeof displaySectionAttributes> = {
    name: 'Display',
    key: 'display',
    description: 'Display used in TVs, Smartphones, Computers, ...',
    attributes: displaySectionAttributes
}
