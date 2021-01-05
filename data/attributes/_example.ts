import { Attribute, IAttributeSection, NumberAttr, NumberRangeAttr, SetAttr, StringAttr, } from '../../abstractions';
import { vColor } from '../values';

export const exampleSectionAttributes = <const>{
    // number
    screenDiagonal: NumberAttr({
        name: 'Screen size',
        description: 'Screen diagonal',
    }),
    // string
    productName: StringAttr({
        name: 'Product name',
        description: 'Product name without additions and variant data',
    }),
    // reusable set of values
    color: SetAttr({
        name: 'Primary color',
        description: 'Primary color',
        values: vColor,
    }),
    // local set of values
    plugType: SetAttr({
        name: 'Plug type',
        values: ['male', 'female'] as const
    }),
    // set of non string values
    voltage: NumberRangeAttr({
        name: 'Voltage',
        unit: 'V',
    }),
};

export const exampleSection: IAttributeSection<typeof exampleSectionAttributes> = {
    name: 'Example',
    key: 'example',
    description: 'Show all available attribute types',
    attributes: exampleSectionAttributes
}

// we don't want to add examples to general list of attributes
// let's create a test dict that we can use in product type examples
export const examplesA = { ...exampleSectionAttributes };
