import { BooleanAttr, NumberAttr, NumberRangeAttr, SetAttr, StringAttr } from '../../../abstractions';
import { IAttributeSection } from '../../../abstractions/attribute-interfaces';
import { vEnergyEfficiencyClass } from '../../values';

export const sectionPowerSupplyAttrs = <const>{
    'powerSupplyVoltage': NumberRangeAttr({
        name: 'connection voltage',
    }),
    'powerConsumptionMax': NumberAttr({
        name: 'max power consumption',
        unit: 'W'
    }),
    'powerConsumptionStandby': NumberAttr({
        name: 'max power consumption',
        unit: 'W'
    }),
    'powerSource': SetAttr({
        name: 'power source',
        values: ['corded electric', 'battery powered'],
        allowCustomValues: true,
    }),
    'batteriesIncluded': BooleanAttr({
        name: 'batteries included',
        description: 'Batteries are included.'
    }),
    'batteriesRequired': BooleanAttr({
        name: 'batteries required',
        description: 'This product requires batteries.'
    }),
    'batteryCapacity': NumberAttr({
        name: 'battery capacity',
        description: 'Amperage the battery can provide for one hour.',
        definitionUrl: 'http://web.mit.edu/evt/summary_battery_specifications.pdf',
        unit: 'Ah'
    }),
    'batteryTechnology': StringAttr({
        name: 'battery technology',
    }),
    'energyEfficiencyClass': SetAttr({
        name: 'energy efficiency class',
        description: 'Energy efficiency class of product.',
        values: vEnergyEfficiencyClass,
    }),
    'energyEfficiencyClassMin': SetAttr({
        name: 'energy label min class',
        description: 'Lowest power consumption class to include in engery label. E.g. "A++".',
        values: vEnergyEfficiencyClass,
    }),
    'energyEfficiencyClassMax': SetAttr({
        name: 'energy label max class',
        description: 'Highest power consumption class to include in engery label. E.g. "D".',
        values: vEnergyEfficiencyClass,
    }),
};

export const sectionPowerSupply: IAttributeSection<typeof sectionPowerSupplyAttrs> = {
    name: 'power supply & energy',
    key: 'powerSupplyEnergy',
    attributes: sectionPowerSupplyAttrs
};
